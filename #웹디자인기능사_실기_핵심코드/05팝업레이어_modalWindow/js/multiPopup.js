$(document).ready(function(){
// 썸네일을 클릭하면 배경레이어 보이기
    $("a.modal").click(function(){
        $("#bglayer").show();
        $("#overlayer").show().html("<img src='" + $(this).attr("href") + "'>");
        return false;
    });

// 배경을 클릭하면 배경레이어 감추기
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer").hide();
    });
});