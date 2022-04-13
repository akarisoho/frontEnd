$(document).ready(function(){
    $("#slide img:gt(0)").hide();

    setInterval(function(){ slide(); },2000);

    var now = 0;
    var imgs = 4;

    function slide() {
    
        now = now == imgs ? 0 : ++now;

        $("#slide img").eq(now-1).fadeOut(1000);
        $("#slide img").eq(now).fadeIn(1000);
    }
});