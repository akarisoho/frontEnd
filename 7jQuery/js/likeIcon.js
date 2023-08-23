$(document).ready(function () {

    /*************************/
    /******toggle Event******/
    /************************/

    var toggle = 0;
    console.log("toggle : " + toggle);
    // 이미지를 클릭 했을 때 실행
    $("img").click(function () {
        // 만약에 toggle값이 0이라면
        if (toggle == 0) {
            // icon1.png로 변경
            $(this).attr("src", "img/icon1.png");
            // toggle의 값을 1로 변경
            toggle = 1;
            console.log("toggle : " + toggle);
        } else {// 아니라면
            // icon0.png로 변경
            $(this).attr("src", "img/icon0.png");
            // toggle의 값을 0으로 변경
            toggle = 0;
            console.log("toggle : " + toggle);
        }
    });




    /*
     * 이미지를 클릭 했을 때 실행
        // 만약에 toggle값이 0이라면
            // icon1.png로 변경
            // toggle의 값을 1로 변경
        // 아니라면
            // icon0.png로 변경
            // toggle의 값을 0으로 변경
     */

    /********************************************** 
    //한 번만 하트를 채웠다가 비울 수 있음
    $("img").click(function () { 
        $(this).attr("src", "img/icon1.png");
        $(this).click(function () { 
            $(this).attr("src", "img/icon0.png");
        }); // 채워진 하트를 빈하트로 만드는 click() end
    }); // 처음에 빈하트를 채워진 하트로 만드는 click() end
    */

}); //ready() end