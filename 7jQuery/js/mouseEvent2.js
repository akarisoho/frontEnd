$(document).ready(function () {
    $("img").mouseover(function () { 
        $(this).attr("src", "img/thumb02.png").attr("alt","thumb02");
    }); // .mouseover() end

    $("img").mouseout(function () { 
        $(this).attr("src", "img/thumb01.png").attr("alt","thumb01");
    });
 
});  //.ready() end