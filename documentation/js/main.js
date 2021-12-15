$(document).ready(function () {
    $(".nav-area ul li a").click(function (){
        $(this).addClass("active").parents("li").siblings().find("a").removeClass("active");
    });
    $(".nav-area > i").click(function (){
        $(this).toggleClass("rotating")
        $(".nav-area ul li a").toggleClass("sliding");
    });

});