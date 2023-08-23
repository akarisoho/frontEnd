$(document).ready(function () {
    //a를 클릭하면 실행
    $("a").click(function () { 
        // a의 href속성값을 가져와서 => $("a").attr("href")
        // img태그의 src속성값에 넣기 => $("img").attr("src","경로")
        $("div > img").attr("src",$(this).attr("href"));
        // $("span").text($(this).attr("href"));
        
        // a의 기본이벤트 없애기
        return false;
    });
    
});