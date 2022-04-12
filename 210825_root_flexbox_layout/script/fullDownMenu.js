$(document).ready(function () {
    
    $(".lnb").hide();

    $(".main-menu li a, .lnb .sub-menu").hover(function () {
            // over
            $(".lnb").stop().slideDown('fast');
        }, function () {
            // out
            $("ul.main-menu li a").css("background-color","");
            $(".lnb").stop().slideUp('fast');
        }
    );

    $(".lnb a").mouseenter(function () { 
        // ES6 에서 변수를 선언 방식 = 스코프 안에서만 변수값 사용가능
        let lnbIdx = $(this).parents('.sub-menu').index();
        console.log("currentSubMenuIndexNumber : ", lnbIdx);
        $("ul.main-menu li").eq(lnbIdx).children("a").css({"background-color":"#ff5050"});
    });
});