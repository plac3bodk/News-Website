$(".readMore").click(function(){
  $(this).toggleClass('more');
  $(".mainOnpage").toggleClass('more');
  if($(this).text() === "Read more"){
    $(this).text("Read less");
  }else{
    $(this).text("Read more");
  }
});

$('.loadMore').click(function(){
    $('#mainPosts').animate({height:'+=885'}, 500);
    if ($('#mainPosts').height() > 7950 ) {
      $('.loadMore').remove();
    }
});
