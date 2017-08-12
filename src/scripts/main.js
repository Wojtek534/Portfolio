//var ScrollReveal = require('scrollreveal');
// Smooth. Require full jquery lib!
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
// Reveal
window.sr = ScrollReveal({
    reset: true
});

sr.reveal('table');
sr.reveal('#library');
sr.reveal('#about');
sr.reveal('.project-item');

// Moving bars
var runbar = function (bar, stop) {
    $('.progress-box .progress .' + bar).animate({
            width: stop
        },
        4000);

}
var displayed = false;
$(window).scroll(function () {
    if (displayed == false) {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            // Programming
            runbar('bar-c', '40%');
            runbar('bar-html', '60%');
            runbar('bar-js', '35%');
            // Data
            runbar('bar-r', '25%');
            runbar('bar-sql', '50%');
            runbar('bar-excel', '60%');
            // Rest
            runbar('bar-ms', '60%');
            runbar('bar-pho', '20%');
            runbar('bar-vsc', '60%');
            displayed = true;
        }
    }
});