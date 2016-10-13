/**
 * Created by jiaxf on 16/10/13.
 */


function Student(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}
Student.prototype.getId = function(){
    return this.id;
};
var student = new Student("skyinlayer", 21, 696);