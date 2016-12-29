/**
 * Created by jiaxf on 16/10/13.
 *
 * 装饰者模式
 */

//定义学生类
function Student(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
    this.getCost = function() {
        return 5500;//学费5500，必交
    };
}
//定义装饰器，需要宿舍，宿舍费550/年
function NeedDormitory(student) {
    var cost = student.getCost();
    student.getCost = function() {
        return cost + 550;
    };
}
//定义装饰器，需要书本，书本费400/年
function NeedBooks(student) {
    var cost = student.getCost();
    student.getCost = function() {
        return cost + 400;
    };
}
//定义装饰器，有女朋友
function NeedGirlfriend(student) {
    var cost = student.getCost();
    student.getCost = function() {
        return cost + 99999;
    };
}

var gaofushuai = new Student("高富帅");
NeedDormitory(gaofushuai);
NeedBooks(gaofushuai);
NeedGirlfriend(gaofushuai);
console.log(gaofushuai.getName() + " 每年需要金钱：" + gaofushuai.getCost());

var skyinlayer = new Student("天镶");
NeedDormitory(skyinlayer);
NeedBooks(skyinlayer);
console.log(skyinlayer.getName() + " 每年需要金钱：" + skyinlayer.getCost());


/**************************javascript 实现接口 *************************/

//定义接口类
var Interface = function(name, methods) {
    var i;
    this.name = name;
    this.methods = [];
    for (i = methods.length; i--;) {
        if (typeof methods[i] !== 'string') {
            throw Error("接口定义错误：接口的方法名称必须是字符串");
        }
        this.methods.push(methods[i]);
    }
};

//第一个参数为检测对象，后面的参数为接口对象
Interface.checkImplements = function(object) {
    var interfaces = Array.prototype.slice.call(arguments, 1);
    var methods;
    var methodName;
    var i;
    var j;
    for (i = interfaces.length; i--;) {
        if (interfaces[i].constructor !== Interface) {
            throw Error("接口定义错误：必须传递Interface类定义的接口");
        }
        methods = interfaces[i].methods;
        for (j = methods.length; j--;) {
            methodName = methods[j];
            if (!object[methodName] || typeof object[methodName] !== 'function') {
                throw Error("接口定义错误：未实现 " + interfaces[i].name + " 接口的 " + methodName + "方法");
            }
        }
    }
};

// test
var Student = new Interface("Student", ["getName", "getCost"]);
function StudentImpl(name) {
    Interface.checkImplements(this, Student);
    this.name = name;
}

StudentImpl.prototype.getName = function() {
    return this.name;
};