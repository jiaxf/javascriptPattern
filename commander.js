/**
 * Created by jiaxf on 16/10/13.
 * Commander 模式
 */

var studentManager = (function() {
    var studentList = [];

    function add(id, name) {
        studentList.push({
            id: id,
            name: name
        });
        return this;
    }

    function remove(id) {
        var i;
        for (i = studentList.length; i--;) {
            if (studentList[i].id === id) {
                studentList.splice(i, 1);
                break;
            }
        }
        return this;
    }

    function get(id) {
        var i;
        for (i = studentList.length; i--;) {
            if (studentList[i].id === id) {
                return studentList[i];
            }
        }
    }

    function count() {
        return studentList.length;
    }

    function getAt(index) {
        return studentList[index];
    }

    return {
        add: add,
        remove: remove,
        get: get,
        getAt: getAt,
        count: count,
        execute: function(name) {
            return this[name] && this[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
}());


studentManager.execute("add", 696, "skyinlayer");
console.log(studentManager.execute("get", 696));
console.log(studentManager.execute("count"));
studentManager.execute("remove", 696);
console.log(studentManager.execute("count"));