$(document).ready(function(){
    //gnb Scroll
    $("#header #gnb a").click(function (e) { 
        if(this.hash !== ""){
            e.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },500);
        }    
    });

    //top Scroll
    $("#top_btn").click(function(){
        $('html,body').animate({
            scrollTop:$('html,body').offset().top
        },500);
    });
});