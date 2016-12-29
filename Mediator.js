/**
 * Created by jiaxf on 16/10/13.
 * 中介者模式
 */

var mediator = (function() {
    //保存事件和订阅者列表
    var events = {};
    //在事件上添加订阅者
    function subscribe(eventName, callback) {
        events[eventName] = events[eventName] || [];
        events[eventName].push({
            context: this,
            callback: callback
        });
        return this;
    }
    //发布事件
    function publish(eventName) {
        var args = Array.prototype.slice.call(arguments, 1);
        var i;
        var subscribers = events[eventName];
        var subscriber;
        if (!subscribers) {
            return false;
        }
        for (i = subscribers.length; i--;) {
            subscriber = subscribers[i];
            subscriber.callback.call(subscriber.context, args);
        }
        return this;
    }
    return {
        publish: publish,
        subscribe: subscribe,
        install: function(obj) {
            obj.publish = publish;
            obj.subscribe = subscribe;
            return this;
        }
    };
}());


//模块构造函数
function Colleague(name) {
    this.name = name;
}
//创建三个模块
var colleague1 = new Colleague("col1");
var colleague2 = new Colleague("col2");
var colleague3 = new Colleague("col3");
//为每个模块创建获得数据后的处理，这里只要输出看结果就好
function callback() {
    console.log(this.name + ": " + Array.prototype.slice.call(arguments));
}
//将中介者模式应用到三个模块上，使他们拥有订阅和发布的接口
mediator.install(colleague1).install(colleague2).install(colleague3);
//模块3发布消息，模块1和模块2获取消息并输出
colleague1.subscribe("pub3", callback);
colleague2.subscribe("pub3", callback);
colleague3.publish("pub3", "天镶", "求", "offer");
//模块2发布消息，模块1和模块3获取消息并输出
colleague1.subscribe("pub2", callback);
colleague3.subscribe("pub2", callback);
colleague2.publish("pub2", "天镶", "想", "吃串");