$(document).ready(function () {
  alert("Merhaba");
});

$("h1").css("color", "red");

$("#h2").css("color", "green")

$("h3").css("color", "blue")

$("p").click(function(){
  $(this).css({
  "color": "white",
  "background-color": "black",
  "font-size": "18px"
  });
  });
  
  