//var ScrollReveal = require('scrollreveal');
// Smooth. Require full jquery lib!
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
// Reveal
window.sr = ScrollReveal({reset: true});

sr.reveal('table');
sr.reveal('#library');
sr.reveal('#about');
sr.reveal('.project-item');