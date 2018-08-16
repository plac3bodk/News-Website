
  //Toggle main navigation
  $(".menuToggle").click(function(){
    $(this).toggleClass("toggled");
    $(".burgerWrap").toggleClass("d");
    $("#nav").toggleClass("navOpen");
    $(".grid").toggleClass("gridPushed");
  });

  //Toggle subList
  $(".subNavToggle").each(function(){
    $(this).click(function(){
      $(this).toggleClass("d");
      $(this).parent().find(".subList").toggleClass("navOpen")
    })
  });

$("#main").click(function(){
  if ($("#nav").hasClass("navOpen")) {
    $("#nav").removeClass('navOpen');
    $(".grid").removeClass('gridPushed');
  }
});
