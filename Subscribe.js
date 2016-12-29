/**
 * Created by jiaxf on 16/10/13.
 */
var pubsub = (function() {
    //订阅者列表
    var events = {};
    var subUid = 0;
    //发布
    function publish(eventName, args) {
        if (!events[eventName]) {
            return false;
        }
        var subscribers = events[eventName];
        var len = subscribers.length;
        while (len--) {
            subscribers[len].callback(eventName, args);
        }
    }
    //订阅
    function subscribe(eventName, callback) {
        events[eventName] = events[eventName] || [];
        var id = subUid++;
        events[eventName].push({
            callback: callback,
            id: id
        });
        return id;
    }
    //取消订阅
    function unsubscribe(id) {
        var eventName;
        var i;
        var len;
        var subscribers;
        for (eventName in events) {
            subscribers = events[eventName];
            if (subscribers) {
                for (i = 0, len = subscribers.length; i < len; i++) {
                    if (subscribers[i].id === id) {
                        subscribers.splice(i, 1);
                        return id;
                    }
                }
            }
        }
        return this;
    }
    //利用Revealing Module模式隐藏内部实现，提供接口
    return {
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
}());


//在hello事件生增加一个订阅
var subscription = pubsub.subscribe("hello", function(eventName, data) {
    console.log("Event:" + eventName + "/data:" + data);
});
//向订阅者发送消息
pubsub.publish("hello", ["天镶"]);
//向订阅者发送消息
pubsub.publish("hello", ["天镶", "求", "offer"]);
//取消订阅
pubsub.unsubscribe(subscription);
//向订阅者发送消息
pubsub.publish("hello", ["天镶", "再求", "offer"]);