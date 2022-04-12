$(document).ready(function(){ //document가 준비 되었을 때 함수실행

    /*
    $("a").click(function(){  // a태그를 클릭했을 때, 함수 실행
        // $("img").attr("속성명","속성값"); img태그에 속성을 변경|추가한다.
        $("img:first-child").attr("src","img/B_thumb01.png").attr("alt","B_thumb01");
        //a태그의 href속성의 주소로 이동되지 않도록 한다. 
        return false;
    }); // .click(); end
*/

    //첫번째 a태그를 클릭했을 때
    $("a:first-child").click(function(){
        $("img:first-child").attr("src","img/B_thumb01.png").attr("alt","B_thumb01");
        return false;
    });

    //두번째 a태그를 클릭했을 때
    $("a:nth-child(2)").click(function(){
        $("img:nth-child(2)").attr("src","img/B_thumb04.png").attr("alt","B_thumb04");
        return false;
    });

});  //.read(); end

// a태그는 기본적으로 href속성으로 이동하는 이벤트가 내장된 요소입니다.
// return false;를 작성하지 않으면 href속성에 있는 url로 이동을하게 됨
//return false; 대신에 event.preventDefault(); 기본이벤트 방지할 수 있음