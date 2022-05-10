$(document).ready(function(){
    // .hide() => 선택한 요소를 숨기는 메서드  
    // .show() => 선택한 가려진 요소를 보여주는 메서드
    
    // 첫번째 이미지를 제외한 나머지 이미지 숨기기
    $("#slider ul li:gt(0)").hide();

    // 첫번째 이미지 사라지도록 만들기
    /* fadeOut()에는 
    fadeOut('fast'), fadeOut('slow') 와 같은 속도 키워드를 지정하거나
    fadeOut(1000), fadeOut(500) 과 같이 밀리초 단위로 속도 지정을 합니다.
    */

    setInterval(function(){
        $("#slider ul li:first").fadeOut(1000).next().fadeIn(1000).end();
        // #slider 의 첫번째 li를 선택해서 2초동안 스르륵 없어지고, 다음요소를 선택해서 2초동안 스르륵 보여지도록 하고 끝 
            $("#slider ul li:first").appendTo("#slider ul");
        // #slider 의 첫번째 li를 선택해서 appendTo로 #slider ul의 맨 마지막 자식요소로 이동시킨다.
    },2000);

    // setInterval(함수,밀리초)  => 밀리초 마다 함수를 무한 반복


});