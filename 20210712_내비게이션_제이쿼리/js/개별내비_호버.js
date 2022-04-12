$(document).ready(function(){
    // => hover(올라갔을 때,벗어났을 때);
    //hover(function(){ /*올라갔을 때 실행구문*/ },function(){/* 벗어났을 때 실행구문 */});

    //선택된 요소에 마우스가 올라가거나 벗어났을 때
    $("ul.main-menu > li").hover(function(){
        // 선택된 요소에 마우스가 올라갔을 때
        $("ul.sub-menu",this).stop().slideDown('fast');
    },function(){
        // 선택된 요소에서 마우스가 벗어났을 때
        $("ul.sub-menu").stop().slideUp('fast');
    });
});
