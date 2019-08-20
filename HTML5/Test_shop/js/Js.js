//封装一个代替getElementById()的方法
function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}

//全局变量
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev");
    next = byId("next");
    len = pics.length;
    menu = byId("menu-content"),
        menuItems= menu.getElementsByClassName("menu-item"),
    subMenu = byId("sub-menu");
    innerBox = subMenu.getElementsByClassName("inner-box");

function slideImg() {
    var main =byId("main");
    //划过清楚定时器，离开继续
    main.onmouseover = function () {
        //划过清除定时器
        if(timer) clearInterval(timer);
    }
        main.onmouseout = function () {
            timer = setInterval(function () {
                index++;
                if (index >= len){
                    index = 0;
                }
                //切换图片
                changeImg();
                },3000);//定时调用
        }
        //自动在main上出发鼠标离开的事件
        main.onmouseout();
    //遍历所有圆点，且绑定点击事件，点击圆点切换图片'
    for (var d = 0;d<len;d++){
        //给所有span添加id的属性，值为d，作为span的索引
        dots[d].id = d;
        dots[d].onclick =  function () {
            // 改变index为当前span的索引
            index = this.id;
            //调用并切换图片
            changeImg();
        }
    }
    //下一张
    next.onclick = function (ev) {
        index++;
        if (index >= len) {
            index = 0;
        }
        changeImg();
    }
    //上一张
    prev.onclick = function (ev) {
        index--;
        if (index < 0) {
            index = len - 1;
        }
        changeImg();
    }
    //导航菜单
    //遍历主菜单，且绑定事件
    for (var m = 0; m < menuItems.length; m++) {
        //给每一个menu-items定义data-index属性，作为索引
        menuItems[m].setAttribute("data-index",m);

        menuItems[m].onmouseover = function () {
            var idx = this.getAttribute("data-index");
            //遍历所有子菜单，将每一个都隐藏
            subMenu.className = "sub-menu";
            for (var j = 0; j < innerBox.length; j++) {
                innerBox[j].style.display='none';
                menuItems[j].style.background = 'none';
            }
            menuItems[idx].style.background='rgba(0,0,0,0.1)';
            innerBox[idx].style.display = 'block';
        }
    }
    menu.onmouseout = function (ev) {
        subMenu.className="sub-menu hide";
    }
    subMenu.onmouseover = function (ev) {
        this.className="sub-menu";
    }
    subMenu.onmouseout = function (ev) {
        this.className="sub-menu hide";
    }
}

//切换图片
function changeImg() {
    //遍历banner下所有的div，将它隐藏
    for (var i = 0; i < len; i++) {
        pics[i].style.display='none';
        dots[i].className = "";
    }
    //根据index索引找到当前div，将其显示出来
    pics[index].style.display='block';
    dots[index].className = "active";
}
slideImg();


