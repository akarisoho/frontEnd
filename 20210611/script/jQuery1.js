$(document).ready(function () {
    //메뉴 마우스오버,아웃이벤트

    // 슬라이드쇼
    // 첫번째 이미지가 .slideshow박스에서 보여지고 나머지는 .slideshow 박스  아래쪽에 위치하도록 함
    // 0번째 이후 이미지를 아래로 위치
    $(".slideshow img:gt(0)").css("left", "-1200px");

    var now = 0;
    var imgs = 2;  // img태그 개수 -1

    // now = now == imgs ? 0 : ++now;

    // $(".slideshow img").eq(now).animate({ "top": "0" }, 1000);

    // $(".slideshow img").eq(now - 1).animate({ "top": "-300px" }, 1000, function () {
    //     $(this).css("top", "300px");
    // });


    // 시간함수 => setInterval(실행할 함수,시간(ms)); => 시간마다 실행할 함수가 실행
    setInterval(function () {
        slideshow();  //slideshow()함수 호출
    }, 2000);

    // now번째를 증가 또는 초기화 시키면서 애니메이션을 실행하는 함수 생성
    function slideshow() {
        now = now == imgs ? 0 : ++now;
        // now의 변수값과 일치하는 인덱스번호를 가진 .slideshow의 후손인 img태그를 선택
        $(".slideshow img").eq(now).animate({ "left": "0" }, 1000);
        //animate({prop:val},time(ms),callback함수)
        $(".slideshow img").eq(now - 1).animate({ "left": "1200px" }, 1000, function () {
            $(this).css("left", "-1200px");
        });
    }


    // 탭바

    // 팝업레이어
});