$(document).ready(function () {
    // $("selector").hover(마우스를 올렸을 때 함수, 마우스를 벗어났을 때 함수);
    // $("img").hover(function(){  },function(){  });
    $("img").hover(function(){  
        //마우스 올렸을 때 실행구문
        $(this).attr("src","img/thumb02.png").attr("alt","thumb02");
    },function(){ 
        //마우스 벗어났을 때 실행구문
        $(this).attr("src","img/thumb01.png").attr("alt","thumb01");
    });
});