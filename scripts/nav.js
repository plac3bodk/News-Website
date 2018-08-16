//Toggle main navigation
//Click .menuToggle
$(".menuToggle").click(function() {
  //Toggle .toggled class on .menuToggle button
  $(this).toggleClass("toggled");
  //Toggle .d class on .burgerWrap
  $(".burgerWrap").toggleClass("d");
  //Toggle .navOpen class on #nav
  $("#nav").toggleClass("navOpen");
  //Toggle .gridPushed class on .grid
  $(".grid").toggleClass("gridPushed");
});

//Toggle subList
$(".subNavToggle").each(function() {
  //Click .subNavtoggle + icon
  $(this).click(function() {
    //Toggle .d class on .subNavToggle
    $(this).toggleClass("d");
    //Find .subList within parent element and toggle .navOpen class
    $(this).parent().find(".subList").toggleClass("navOpen")
  })
});

//Close menu when clicking in content window
//Click content window #main
$("#main").click(function() {
  //if #nav element has .navOpen class then...
  if ($("#nav").hasClass("navOpen")) {
    //...remove .navOpen class from #nav and...
    $("#nav").removeClass('navOpen');
    //.....remove .gridPushed class from .grid
    $(".grid").removeClass('gridPushed');
  }
});
