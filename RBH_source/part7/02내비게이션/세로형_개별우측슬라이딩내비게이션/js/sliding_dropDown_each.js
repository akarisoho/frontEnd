$(document).ready(function(){

    $("ul.main_menu>li").hover(function(){
        $("ul.sub_menu",this).stop().slideDown('fast');
    },function(){
        $("ul.sub_menu").stop().slideUp('fast');
    });   //.hover(); 끝

});    //ready(); 끝