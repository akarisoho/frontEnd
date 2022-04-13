$(document).ready(function(){
    $("#slide img:gt(0)").css({"left":"800px"});
    var now = 0;    //현재 보여지는 img태그의 인덱스번호
    var imgs = 4;   // 이미지 개수 -1, 마지막 img태그의 인덱스 번호
    
    setInterval(function(){ slide(); },2000);
    
    function slide() {
        now = now == imgs ? 0 : ++now;
        $("#slide img").eq(now).animate({"left":"0px"},1000);
        $("#slide img").eq(now-1).animate({"left":"-800px"},1000,function(){
            $(this).css({"left":"800px"})
        });
    }     
});