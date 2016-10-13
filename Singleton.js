/**
 * Created by jiaxf on 16/10/13.
 */
var singleton = (funtion(){
    var instance = null;
    function init() {
        // define private methods and properties
        return {
            // define public methods and proterties
        };
    }
    return {
        getInstance : function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();