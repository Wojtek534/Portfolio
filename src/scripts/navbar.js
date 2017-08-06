! function(a) {
"use strict"; 
    a(window).scroll(function() {
      a(this).scrollTop() > 1 ? a(".navbar").addClass("lh-nav-bg-transform") : a(".navbar").removeClass("lh-nav-bg-transform")
    })
}(jQuery);