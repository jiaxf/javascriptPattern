/**
 * Created by jiaxf on 16/10/13.
 */

var AbstractMenuFactory = (function() {
    var constructors = {};
    //根据type创建实例
    function createMenu(type, options) {
        var menuConstructor = constructors[type];
        return menuConstructor ? new menuConstructor(options) : null;
    }
    //在抽象工厂中注册新菜单类型
    function registerMenu(type, constructor) {
        constructors[type] = constructor;
        return this;
    }
    return {
        createMenu: createMenu,
        registerMenu: registerMenu
    };
}());


AbstractMenuFactory
    .registerMenu("vertical", VerticalMenu)
    .registerMenu("horizontal", HorizontalMenu)
    .registerMenu("animation", AnimationMenu);

var options = {
    color: "blue",
    items: ["主页", "文章", "玩意", "其他"],
    curItem: "主页"
};

var menu1 = AbstractMenuFactory.createMenu("vertical", options);
console.log(menu1 instanceof VerticalMenu);//true
var menu2 = AbstractMenuFactory.createMenu("horizontal", options);
console.log(menu2 instanceof HorizontalMenu);//true
var menu3 = AbstractMenuFactory.createMenu("animation", options);
console.log(menu3 instanceof AnimationMenu);//true