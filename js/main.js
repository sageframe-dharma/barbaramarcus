/* ============================================================
   Barbara Marcus — Main JS
   Background video, scroll animations, nav behavior
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll-triggered fly-in animations ── */
  var animEls = document.querySelectorAll('.fly-in, .fly-in-left, .fly-in-right');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    animEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    animEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Nav: transparent over hero, scrolled state on inner pages ── */
  var nav = document.getElementById('site-nav');
  var hero = document.querySelector('.hero');

  // Only apply scroll behavior on homepage (which has the full-height hero)
  if (nav && hero) {
    function updateNav() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Hide nav after scrolling past hero
      var heroBottom = hero.offsetTop + hero.offsetHeight;
      if (scrollY > heroBottom - nav.offsetHeight) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ── Video: ensure autoplay works (some browsers need a nudge) ── */
  var videos = document.querySelectorAll('video[autoplay]');
  videos.forEach(function (video) {
    video.play().catch(function () {
      // Autoplay blocked — video poster will show as fallback
    });
  });

})();
