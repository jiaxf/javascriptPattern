/**
 * Created by jiaxf on 16/10/13.
 *
 * 混入模式
 */

var Person = function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

var Student = function(name, age, gender, id, score) {
    Person.call(this, name, age, gender);
    this.id = id;
    this.score = score;
};
Student.prototype = Object.create(Person.prototype);

var student = new Student("天镶", "23", "男", 696, 60);
console.log(student);

//实现扩展方法
function extend(obj, mixin) {
    for (var item in mixin) {
        obj[item] = mixin[item];
    }
}
//创建需要扩展的功能集合
var myMixin = {
    sayHello: function() {
        console.log(this.name + " says: Hello!");
    },
    sayBye: function() {
        console.log(this.name + " says: Bye bye!");
    }
};
//将扩展应用到构造函数prototype中
extend(Student.prototype, myMixin);

var student = new Student("天镶", "23", "男", 696, 60);
//新建的实例拥有扩展方法了
student.sayHello();//天镶 says: Hello!
student.sayBye();//天镶 says: Bye bye!