/**
 * Created by jiaxf on 16/10/13.
 */
//构造函数
function ObserverList() {
    this.observerList = [];
}
//向观察者列表中增加观察者对象
ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
};
//清空观察者列表
ObserverList.prototype.empty = function() {
    this.observerList = [];
};
//统计观察者列表中的观察者数量
ObserverList.prototype.count = function() {
    return this.observerList.length;
};
//根据序号获取观察者对象
ObserverList.prototype.get = function(index) {
    if (index >= 0 && index < this.observerList.length) {
        return this.observerList[index];
    }
};
//获取某个观察者对象在列表中的序号
ObserverList.prototype.indexOf = function(obj) {
    return this.observerList.indexOf(obj);
};
//从观察者列表中移除某个观察者对象
ObserverList.prototype.remove = function(obj) {
    var index = this.get(obj);
    if (index != -1) {
        this.removeAt(index);
    }
};
//从观察者列表中移除某个特定序号的观察者对象
ObserverList.prototype.removeAt = function(index) {
    if (index >= 0 && index < this.observerList.length) {
        this.observerList.splice(index, 1);
    }
};


/********************************************/

//Subject构造函数
function Subject() {
    this.observers = new ObserverList();
}
//给这个Subject增加观察者
Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};
//从这个Subject移除观察者
Subject.prototype.removeObserver = function(observer) {
    this.observers.remove(observer);
};
//通知观察者列表中的所有观察者
Subject.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
};