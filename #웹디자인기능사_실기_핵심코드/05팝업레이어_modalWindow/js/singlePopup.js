$(document).ready(function(){
// 썸네일을 클릭하면 배경레이어 보이기
    $("#imgBtn").click(function(){
        $("#bglayer").show();
        $("#overlayer").show();
    });

// 배경을 클릭하면 배경레이어 감추기
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer").hide();
    });
});