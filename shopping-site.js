$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
            
        }
    );
});

$(window).load(function(){
  $(".pro_box img").click(function(){
    var img_src = $(this).attr("src");
    $("#slide img").attr("src", img_src);
  });
});