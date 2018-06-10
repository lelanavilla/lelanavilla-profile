    
      // Smooth Scrolling
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

//particles.js

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

    