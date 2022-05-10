$(document).ready(function(){
    // .mouseover() => 마우스가 선택요소에 올라갔을 때
    // .mouseout()/.mouseleave() => 마우스가 선택요소에서 벗어났을 때
    // 횟수로 카운팅을 하므로 .stop()이라는 메서드로 이벤트 중지를 함
    /*
    $("#gnb").mouseenter(function(){
        $("#lnb").stop().slideDown('fast');
    });
    $("#lnb").mouseleave(function(){
        $("#lnb").stop().slideUp('fast');
    });*/
    
    /* .hover(마우스올렸을때 , 마우스벗어났을때); */
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