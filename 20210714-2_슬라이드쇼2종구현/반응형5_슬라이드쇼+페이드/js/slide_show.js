$(document).ready(function () {
    $(".main_slide img:gt(0)").hide();

    setInterval(function(){
        // $(".main_slide img:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".main_slide");
        slideShow();  //함수 호출
    },2000);
    
    //함수 정의
    function slideShow() {
        $(".main_slide img:first-child").fadeOut(1000).next().fadeIn(1000).end();
        $(".main_slide img:first-child").appendTo(".main_slide");
    }
});