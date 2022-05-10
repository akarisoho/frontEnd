$(document).ready(function () {
    $("#header #gnb a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            //a태그가 기본적으로 가진 이벤트(페이지 이동) 삭제

            var hash = this.hash;
            //클릭한 hash를 변수 hash에 담기
            console.log(hash);

            // $('html,body').animate({},초,콜백함수);
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    }); // #header click event end 
    //탑버튼 이벤트
    $("#top_btn").click(function () {
        $("html,body").animate({
            scrollTop: $("html,body").offset().top
        }, 300);
    });
});