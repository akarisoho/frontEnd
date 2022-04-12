$(document).ready(function(){
    $("#slide ul li:gt(0)").hide();
    
    // 특정 시간마다 반복실행 => setInterval(실행함수,밀리초);
    setInterval(function(){ slide(); },2000);
    
    var now = 0;    //indexNumber로 현재 번째 수
    var imgs = 4;   // 총 이미지 개수 -1 => indexNum기준으로 표현
    
    //slide() 함수 생성,선언
    function slide(){
        now = now == imgs ? 0 : ++now;
// ⓐ   1    =  0 == 4 ?      : now 선증가연산(1) 
// ⓓ   2    =  1 == 4 ?      : now 선증가연산(2)       
// ⓖ   3    =  2 == 4 ?      : now 선증가연산(3) 
// ⓙ   4    =  3 == 4 ?      : now 선증가연산(4)
// ⓜ   0     =  4 == 4 ?  0   :        
        //첫번째 이미지는 가려주고
        $("#slide ul li").eq(now-1).fadeOut(1000);
// ⓑ    $("#slide ul li").eq(0).fadeOut
// ⓔ    $("#slide ul li").eq(1).fadeOut
// ⓗ    $("#slide ul li").eq(2).fadeOut  
// ⓚ    $("#slide ul li").eq(3).fadeOut  
        //두번째 이미지는 보여주고
        $("#slide ul li").eq(now).fadeIn(1000);
// ⓒ    $("#slide ul li").eq(1).fadeIn     
// ⓕ    $("#slide ul li").eq(2).fadeIn
// ⓘ    $("#slide ul li").eq(3).fadeIn
// ⓛ    $("#slide ul li").eq(4).fadeIn
    }
});