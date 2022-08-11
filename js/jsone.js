$(document).ready(function(){
  $(function() {
    $("#header").load("header.html");
  });

  $(function() {
    $("#footer").load("footer.html");
  });
  $("footer").css("background-color","#000000");
  $("footer").css("padding","5%");

  $(".main a").hover(function () {
    $(this).css("color", "#FFD700");
        }, function(){
        $(this).css("color", "white");
  });
  $(".second2 img").hover(function () {
    $(this).css("width", "60px");
    $(this).css("height", "60px");
        }, function(){
    $(this).css("width", "50px");
    $(this).css("height", "50px");
  });

});
