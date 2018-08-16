//Click on .readMore button
$(".readMore").click(function(){
    //Toggle .more on .readMore button
  $(this).toggleClass('more');
    //Toggle .more on .mainOnpage text area
  $(".mainOnpage").toggleClass('more');
    //If button text equals 'Read more'...
  if($(this).text() === "Read more"){
      //...change to 'Read less' else...
    $(this).text("Read less");
  }else{
      //...change back to 'Read more'
    $(this).text("Read more");
  }
});
    //If .mainOnpage height isn't taller than 135px...
  if ($(".mainOnpage p").height() < 135 ){
      //...remove .readMore button
    $(".readMore").remove();
  }

//Click on .loadMore button
$('.loadMore').click(function(){
    //Add 885px to .#mainPosts container equalling 3 extra lines of posts...
    $('#mainPosts').animate({height:'+=885'}, 500);
    //..unless #mainPosts height is over 7950px
    if ($('#mainPosts').height() > 7950 ) {
        //..then remove .loadMore button
      $('.loadMore').remove();
    }
});
