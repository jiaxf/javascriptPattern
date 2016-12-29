/**
 * Created by jiaxf on 16/10/13.
 */
//水平菜单构造函数
function HorizontalMenu(options) {
    this.color = options.color || "black";
    this.items = options.items || [];
    this.curItem = options.curItem || "";
}
//垂直菜单构造函数
function VerticalMenu(options) {
    this.color = options.color || "black";
    this.items = options.items || [];
    this.curItem = options.curItem || "";
}


function AnimationMenu(options) {
    this.color = options.color || "black";
    this.items = options.items || [];
    this.curItem = options.curItem || "";
}
//菜单工厂
function MenuFactory() {}
//确定默认情况下创造的菜单类型
MenuFactory.prototype.menuClass = VerticalMenu;
//工厂创建菜单的方法
MenuFactory.prototype.createMenu = function(options) {
    if (options.type === "vertical") {
        this.menuClass = VerticalMenu;
    } else if (options.type === "animation"){
        this.menuClass = AnimationMenu;
    } else {
        this.menuClass = HorizontalMenu;
    }
    return new this.menuClass(options);
};

//创建工厂实例
var menuFactory = new MenuFactory();
//用工厂方法创建垂直菜单
var menu = menuFactory.createMenu({
    type: "vertical",
    color: "blue",
    items: ["主页", "文章", "玩意", "其他"],
    curItem: "主页"
});
//输出
console.log(menu);
console.log(menu instanceof HorizontalMenu);
console.log(menu instanceof VerticalMenu);
//用工厂方法创建水平菜单
var menu2 = menuFactory.createMenu({
    type: "horizontal",
    color: "blue",
    items: ["主页", "文章", "玩意", "其他"],
    curItem: "主页"
});
//输出
console.log(menu2);
console.log(menu2 instanceof HorizontalMenu);
console.log(menu2 instanceof VerticalMenu);