$(document).ready(function(){
     // 첫번째 이미지를 제외한 나머지 이미지 숨기기
    $("#slider ul li:gt(0)").hide();

    // start함수나 stop함수에서도 사용가능한 형태의 전역변수로 변수 선언
    var fading;

    // 슬라이드쇼 시작 함수 선언
    function start() {
        fading = setInterval(function(){
            $("#slider ul li:first").fadeOut(1000).next().fadeIn(1000).end();
                $("#slider ul li:first").appendTo("#slider ul");
        },2000);
    }

    // 슬라이드쇼 멈춤 함수 선언
    function stop() {
        // clearInterval(); setInterval의 반복을 삭제
        clearInterval(fading);
    }
    // 웹페이지가 로딩되었을때 함수호출이 되어 화면에 보여짐
    start();

    // 마우스를 올렸을때와 마우스를 벗어났을 때 실행문
    // .hover(마우스를 올렸을 때 실행 함수, 마우스 벗어났을 때 실행함수);
    $("#slider img").hover(function(){
        // 마우스 올렸을 때 실행구문, stop 함수 호출
        stop();
    },function(){
        // 마우스 벗어났을 때 실행구문, start 함수 호출
        start();
    });

});