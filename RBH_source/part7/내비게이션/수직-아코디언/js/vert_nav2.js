$(document).ready(function(){
    $("li.mainList").hover(function(){
        // 마우스가 올라갔을 때
        $(".subMenu",this).stop().slideDown('fast');
    },function(){
        // 마우스가 벗어났을 때
        $(".subMenu").stop().slideUp('fast');
    });
});  //   .ready(); end