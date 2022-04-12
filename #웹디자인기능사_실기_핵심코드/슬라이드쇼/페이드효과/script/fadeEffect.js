$(document).ready(function(){
    // 첫번째 이미지 리스트를 제외한 나머지 이미지를 가리기 => .hide()
    //                                            cf)보이기 => .show()
    
    //필터 선택자
    // :eq(indexNumber) => indexNumber와 일치하는 번호의 요소를 선택
    // :gt(indexNumber) => indexNumber보다 큰 번호의 요소들을 선택
    // :lt(indexNumber) => indexNumber보다 작은 번호의 요소들을 선택
    $("#slide ul li:gt(0)").hide();
    
    // 첫번째 이미지는 스르륵 사라지고, 두번째 이미지는 스르륵 나타나고
    // 스르륵 => 사라지고 fadeOut(speed)   , 나타나고 fadeIn(speed)
    // speed => 'fast', 'slow', 'normal', 300, 500, 1000(1초)
    
    // 특정 시간마다 반복실행 => setInterval(실행함수,밀리초);
    setInterval(function(){
        $("#slide ul li:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide ul");
    },2000);
});