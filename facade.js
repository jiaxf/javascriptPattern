/**
 * Created by jiaxf on 16/10/13.
 *
 * 外观模式
 */

function bindEvent(ele, event, callback) {
    if (ele.attachEvent) {
        ele.attachEvent("on" + event, function(event) {
            event = event || window.event;
            event.target = event.target || event.srcElement;
            callback(event);
        });
    } else {
        ele.addEventListener(event, callback, false);
    }
};