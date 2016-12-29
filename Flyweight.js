/**
 * Created by jiaxf on 16/10/13.
 */

//定义学生接口
var StudentInterface = new Interface("StudentInterface", ["sayHello", "work", "sayBye"]);
//创建学生类
function Student(name, id) {
    Interface.checkImplements(this, StudentInterface);
    this.name = name;
    this.id = id;
}
//实现学生接口中的方法
Student.prototype.work = function() {
    console.log(this.name + "正在干活...");
};

Student.prototype.sayHello = function() {
    console.log(this.name + "来到实验室...");
};

Student.prototype.sayBye = function() {
    console.log(this.name + "离开实验室...");
};
//创建学生工厂
function StudentFactory() {
    var students = {};

    function createStudent(id, name) {
        if (!students[id]) {
            students[id] = new Student(name, id);
        }
        return students[id];
    }
    return {
        createStudent: createStudent
    };
}

var StudentManager = (function() {
    //签到数据库
    var attendance = {};
    //学生工厂
    var studentFactory = new StudentFactory();
    //签到
    function signIn(id, name) {
        var student = studentFactory.createStudent(id, name);
        attendance[id] = attendance[id] || [];
        attendance[id].push({
            student: student,
            signInTime: new Date(),
            state: "signIn"
        });
        student.sayHello();
    }
    //干活
    function work(id, name) {
        var attend = attendance[id];
        for (var i = attend.length; i--;) {
            if (attend[i].state === "signIn") {
                attend[i].student.work();
                attend[i].state = "worked";
            }
        }
    }
    //签退
    function signOut(id, name) {
        var attend = attendance[id];
        for (var i = attend.length; i--;) {
            if (attend[i].state === "worked") {
                attend[i].state = "signOut";
                attend[i].signOutTime = new Date();
                attend[i].student.sayBye();
            }
        }

    }
    return {
        signIn: signIn,
        work: work,
        signOut: signOut
    };
}());