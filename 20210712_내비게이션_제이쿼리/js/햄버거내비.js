$(document).ready(function () {
    // toggle기능으로 변경
    var toggle = 0;
    $("#hamberger").click(function(){
        if (toggle == 0) {
            $("#drawer-menu").css("left","0");
            toggle = 1;
            console.log(toggle);
        } else{
            $("#drawer-menu").css("left","-100%");
            toggle = 0;
            console.log(toggle);
        }
    }); //#hamberger toggle end

    //닫기버튼
    $(".close").click(function(){
        $("#drawer-menu").css("left","-100%");
    });
});