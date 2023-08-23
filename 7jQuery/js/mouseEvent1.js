$(document).ready(function () {
    //마우스를 올렸을 때 실행해 => 이미지에 마우스가 올라갔을 때, 실행
    $("img").mouseenter(function () { 
        //이미지 교체 => 이미지의 src속성을 thumb02로 바꾸기 => attr()
        $(this).attr("src", "img/thumb02.png").attr("alt","thumb02");
    }); // .mouseenter() end

    //마우스가 벗어났을 때  => 이미지에서 마우스가 벗어났을 때 실행
    $("img").mouseleave(function () { 
        $(this).attr("src", "img/thumb01.png").attr("alt","thumb01");
    });
 
});  //.ready() end