(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. NAV SCROLL STATE */
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  /* 2. SCROLL REVEAL */
  var revealSelectors = '.reveal, .reveal-left, .reveal-scale';

  if (prefersReducedMotion) {
    document.querySelectorAll(revealSelectors + ', .reveal-child').forEach(function (el) {
      el.classList.add('visible');
    });
  } else {
    var IO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          IO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(revealSelectors).forEach(function (el) {
      IO.observe(el);
    });

    /* stagger children */
    document.querySelectorAll('[data-stagger]').forEach(function (parent) {
      parent.querySelectorAll('.reveal-child').forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.09) + 's';
        IO.observe(child);
      });
    });

    /* Fallback: force-reveal any cards that are already in viewport on load */
    document.querySelectorAll('.reveal-child').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }

  /* 3. COUNTER ANIMATION ENGINE */
  function animateCounter(el, config) {
    if (config.type === 'text') {
      var frames = config.frames;
      var half = config.duration / (frames.length - 1);
      frames.forEach(function (frame, i) {
        setTimeout(function () { el.textContent = frame; }, i * half);
      });
      return;
    }
    var start = 0;
    var end = config.end;
    var duration = config.duration || 1600;
    var prefix = config.prefix || '';
    var suffix = config.suffix || '';
    var startTime = null;

    function tick(now) {
      if (!startTime) startTime = now;
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (end - start) * eased);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        try {
          var config = JSON.parse(entry.target.dataset.counter);
          animateCounter(entry.target, config);
        } catch (e) {}
        counterIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-counter]').forEach(function (el) {
    counterIO.observe(el);
  });

  /* 4. TICKER PAUSE ON HOVER (WCAG 2.2.2) */
  var ticker = document.querySelector('.ticker-track');
  if (ticker) {
    var strip = ticker.closest('.ticker-strip');
    strip.addEventListener('mouseenter', function () {
      ticker.style.animationPlayState = 'paused';
    });
    strip.addEventListener('mouseleave', function () {
      ticker.style.animationPlayState = 'running';
    });
  }

  /* 5. HERO PARALLAX — blob follows cursor subtly */
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    var blob = document.querySelector('.hero-svg-bg');
    if (blob) {
      var rafId = null;
      document.addEventListener('mousemove', function (e) {
        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          var x = (e.clientX / window.innerWidth - 0.5) * 20;
          var y = (e.clientY / window.innerHeight - 0.5) * 14;
          blob.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
          rafId = null;
        });
      }, { passive: true });
    }
  }

})();
