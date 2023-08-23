// jqdoc
$(document).ready(function () {
    // slide01.png를 제외한 나머지 이미지를 숨기기
    $(".slide li:gt(0)").hide();
    
    setInterval(function(){
        $(".slide li:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slide ul");
    },2000);

    //시간함수 => setTimeout(), setInterval();
    // setInterval(function(){ /* 실행구문*/}, 시간ms); => 지정된 시간마다 실행구문 반복
    // setTimeout(function(){/*실행구문*/}, 시간ms); 
    // => 지정된 시간이 지나고 한번만 실행구문을 실행

    // setTimeout(() => {  //es6문법으로 작성된 화살표 함수
    // setTimeout(function() {
    //     $(".slide li:nth-child(2)").fadeOut(1000).next().fadeIn(1000);
    // }, 2000);

});