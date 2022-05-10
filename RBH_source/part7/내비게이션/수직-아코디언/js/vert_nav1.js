$(document).ready(function(){
    // .mainList에 마우스를 올리면
    $(".mainList").mouseenter(function(){
        // .subMenu를 보여지게 한다. => slideDown(속도);
        //  속도는 키워드로 작성하거나 => fast, normal, slow
        //         ms(밀리초) 작성 => 1000 == 1초
        $(".subMenu",this).stop().slideDown('fast');
    });
    
    // .mainList에서 마우스가 벗어나면
    $(".mainList").mouseleave(function(){
        //subMenu를 가려지게 한다. => slideUp(속도);
        $(".subMenu").stop().slideUp(300);
    });
});