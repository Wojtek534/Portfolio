// White screen on scroll (add class)
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll >= 10){
    $(".navbar").addClass("lh-nav-bg-transform");
  } else{
    $(".navbar").removeClass("lh-nav-bg-transform");
  }
})
