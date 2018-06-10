$('a[href*="#"]:not([href="#"])').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }

    e.preventDefault();

  });
window.sr = ScrollReveal();
sr.reveal('.about-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.about-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.about-btn', {
  duration: 2000,
  delay: 2000,
  origin: 'bottom'
});
sr.reveal('.portfolio-left', {
  duration: 2000,
  delay: 2000,
  origin: 'top'
});
sr.reveal('.portfolio-right', {
  duration: 2000,
  delay: 2000,
  origin: 'top'
});
sr.reveal('.portfolio-btn', {
  duration: 2000,
  delay: 2000,
  origin: 'bottom'
});
sr.reveal('.contact', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
