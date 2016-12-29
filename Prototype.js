/**
 * Created by jiaxf on 16/10/13.
 *
 * 原型模式
 */

var parent = {
    name: "skyinlayer",
    sayHello: function() {
        return "hello, " + this.name;
    }
};

var child = Object.create(parent, {
    id: {
        value: 696,
        writable: false,
        configurable: false,
        enumerable: false
    },
    age: {
        value: 21,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

// 由于Object.create方法在ES5中定义，在不支持的浏览器中需要polyfill，简单的不支持optionalDescriptorObjects
Object.prototype.create = function(parent){
    function F(){}
    F.prototype = parent;
    return new F();
};

console.log(child);