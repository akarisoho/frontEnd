$(function(){
    $("#gnb li").hover(function(){
        $("#lnb").stop().slideDown('fast').hover(function(){
            $(this).stop().slideDown('fast');
        },function(){
            $(this).stop().slideUp('fast');
        });
    },function(){
        $("#lnb").stop().slideUp('fast');
    });
});
