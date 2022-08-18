// 확장프로그램 jQuery Code Snippets를 사용하신다면
// jqRead.. 자동완성 사용가능 ▼
$(document).ready(function () {
    // 2depth DropDown Query
    // jqHover
    $("#gnb li.main-list").hover(function () {
        // over
        // jqSlideDown
        $(this).children("ul.sub-menu").stop().slideDown('fast');
    }, function () {
        // out
        // jqSlideUp 
        $("ul.sub-menu").stop().slideUp(100);
    });// .hover() end
        // => slideUp()이나 slideDown()은 괄호 안에 키워드(fast|slow|normal)나 
        // ms(1000ms = 1s)으로 동작 시간 지정가능

    $(".gnb li.main-list").click(function () {
        $(this).siblings().children("ul.sub-menu").stop().slideUp(100);
        $(this).children("ul.sub-menu").stop().slideDown('fast');
    });// .click() end

    // drawer-menu
    var toggle = 0; // 서랍메뉴가 안보이는 상태 : 0, 서랍메뉴가 보이는 상태 : 1
    var count = 0;
    $("#hamberger").click(function () {
        count++;
        //jqCssSet
        // $("#drawer-menu").css("left", "0"); => 단일CSS 작성
        // 복수 CSS를 세팅 => css({"프로퍼티1":"값", "프로퍼티2":"값"});
        // .animate({"css프로퍼티1":"값", "css프로퍼티2":"값"},애니메이션시간ms,콜백함수);
        // 콜백함수란? 앞에서 지정한 css를 변경한 후에 실행할 함수 => 생략가능
        // $("#drawer-menu").animate({"left":"0"},500,function(){
        //     alert("메뉴가 열렸습니다!");
        // });
        if (toggle == 0) {
            $("#drawer-menu").animate({ "left": "0" }, 500, "swing");
            toggle = 1;
            console.log("클릭한 횟수 : " + count);
            console.log("toggle의 값 : " + toggle);
        } else {
            $("#drawer-menu").animate({ "left": "-100%" }, 500, "swing");
            toggle = 0;
            console.log("클릭한 횟수 : " + count);
            console.log("toggle의 값 : " + toggle);
        }
    });
});