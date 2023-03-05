$(document).ready(function () {
  alert("Merhaba");
});

$("h1").css("color", "red");

$("#h2").css("color", "green")

$("h3").css("color", "blue")

$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
  
