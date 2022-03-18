//nav
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});

//banner
var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-1000)+"px";
    $(".slideList").animate({left:slidePosition},400);
},3000);

//tabmenu
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(event){
    event.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
});

//layerpopup
$("#content1 .right").click(function(){
    $(".layer").slideDown(300);
    $(".layer").show();
});

$(".layer .close").click(function(){
    $(".layer").slideUp(300);
    $(".layer_bg").hide();
})