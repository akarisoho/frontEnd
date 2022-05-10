$(document).ready(function(){
    $("#slide img:gt(0)").css({"top":"500px"});
    // index0번째 이미지를 제외한 나머지는 모두 아래에 위치해있어야 합니다.

    var now = 0;    //현재 보여지는 img태그의 인덱스번호
    var imgs = 4;   // 이미지 개수 -1, 마지막 img태그의 인덱스 번호
    
    setInterval(function(){ slide(); },2000);
    
    function slide() {
        now = now == imgs ? 0 : ++now;
        $("#slide img").eq(now).animate({"top":"0px"},1000);
        $("#slide img").eq(now-1).animate({"top":"-550px"},1000,function(){
            $(this).css({"top":"500px"})
        });
    }     
});