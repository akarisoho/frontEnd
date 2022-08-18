$(document).ready(function(){
    // 선택된 요소를 클릭 했을 때,
    $("ul.main-menu > li").click(function(){
        $("ul.sub-menu").stop().slideUp('fast'); // 보여지는 sub-menu를 모두 닫은 후에
        $(this).children("ul.sub-menu").stop().slideDown('fast'); // 마우스로 클릭한 메뉴만 열기
    });
});
