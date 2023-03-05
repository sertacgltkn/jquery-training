$(document).ready(function () {
  alert("Merhaba");
});

$("h1").css("color", "red");

$("#h2").css("color", "green");

$("h3").css("color", "blue");

$("p").on({
  mouseenter: function () {
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function () {
    $(this).css("background-color", "lightblue");
  },
  click: function () {
    $(this).css("background-color", "yellow");
  },
});

// $("button").click(function(){
//   $("p").toggle();
// });

$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});