$(document).ready(function(){
  $(".indigator a").click(function(){
    $(this).addClass("active");
    $(this).parent().siblings('li').children().removeClass('active');
  });
});