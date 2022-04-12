$(document).ready(function () {
    //메뉴 마우스오버,아웃이벤트 => .mouseenter() & .mouseleave() => .hover() 
    // 서브메뉴가 스르륵 아래로 => .slideDown(speed);
    // 서브메뉴가 스르륵 위로 => .slideUp(speed);
                //  => speed에는 키워드를 넣을 수도 있고 ms으로 지정할 수 있음
                //    키워드 => slow, normal, fast   / ms => 1000 = 1초
    $("#gnb").hover(function(){
        //슬라이드 다운
        $("#gnb .subMunue").stop().slideDown();
    },function(){
        //슬라이드 업
        $("#gnb .subMunue").stop().slideUp();
    });


    // 슬라이드쇼
    $(".slideshow img:gt(0)").css("top", "-300px");

    var now = 0;
    var imgs = 2;  // img태그 개수 -1
    setInterval(function () {
        slideshow();  //slideshow()함수 호출
    }, 2000);

    function slideshow() {
        now = now == imgs ? 0 : ++now;
        $(".slideshow img").eq(now).animate({ "top": "0" }, 1000);
        $(".slideshow img").eq(now - 1).animate({ "top": "300px" }, 1000, function () {
            $(this).css("top", "-300px");
        });
    }


    // 탭바
    $("#tab li").click(function(){
        var idx = $(this).index();
        // console.log(idx);

        // 클릭한 탭메뉴의 CSS스타일을 add/remove 함
        $(this).addClass("tab_on").siblings().removeClass("tab_on");

        // 클릭한 li의 index번호와 같은 tab_contents를 선택해서 on을 삽입/ 나머지 형제들에게서는 on제거
        $(this).parent().siblings(".tab_contents").eq(idx).addClass("on").siblings().removeClass("on");

    });

    // 팝업레이어
    // 교환 및 반품안내를 클릭 했을 때,
    $("#first-list").click(function(){
        // #bglayer, #overlayer를 보여줘.. => .show(); 
        $("#bglayer, #overlayer").show();
    });

    //닫기 버튼을 클릭했을 때,
    $("#overlayer button").click(function(){
        // #bglayer, #overlayer를 숨겨줘.. => .hide();
        $("#bglayer, #overlayer").hide();
    });

});