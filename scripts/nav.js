$(".menuToggle").click(function(){
  $(this).toggleClass("toggled");
  $(".burgerWrap").toggleClass("d");
  $("#nav").toggleClass("navOpen");
  $(".grid").toggleClass("gridPushed");
})
