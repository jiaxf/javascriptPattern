/**
 * Created by jiaxf on 16/10/13.
 * 抽象装饰 模式
 *
 */

var StudentInterface = new Interface("StudentInterface", ["getCost", "getName"]);

// 装饰原始类
var Student = function(name) {
    Interface.checkImplements(this, StudentInterface);
    this.name = name;
};

Student.prototype.getName = function() {
    return this.name;
};

Student.prototype.getCost = function() {
    return 5500;
};

// 装饰器基类
var StudentDecorator = function(student) {
    Interface.checkImplements(student, StudentInterface);
    this.student = student;
};

StudentDecorator.prototype.getName = function() {
    return this.student.getName();
};

StudentDecorator.prototype.getCost = function() {
    return this.student.getCost();
};

// 创建装饰器
//宿舍装饰器
var DormitoryDecorator = function(student) {
    StudentDecorator.call(this, student);
};

extend(DormitoryDecorator.prototype, StudentDecorator.prototype);

DormitoryDecorator.prototype.getCost = function() {
    return this.student.getCost() + 550;
};

// 通过extend和调用装饰器基类的构造函数来将基类的属性和方法复制给装饰器类，同理构建两个新的装饰器，书本装饰器和把妹装饰器

//书本装饰器
var BooksDecorator = function(student) {
    StudentDecorator.call(this, student);
};

extend(BooksDecorator.prototype, StudentDecorator.prototype);

BooksDecorator.prototype.getCost = function() {
    return this.student.getCost() + 400;
};

//把妹装饰器
var GirlfriendDecorator = function(student) {
    StudentDecorator.call(this, student);
};

extend(GirlfriendDecorator.prototype, StudentDecorator.prototype);

GirlfriendDecorator.prototype.getCost = function() {
    return this.student.getCost() + 99999;
};



var student = new Student("天镶");
console.log(student.getCost());
student = new DormitoryDecorator(student);
console.log(student.getCost());
student = new GirlfriendDecorator(student);
console.log(student.getCost());
student = new BooksDecorator(student);
console.log(student.getCost());