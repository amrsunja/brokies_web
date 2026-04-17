(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var navMobile = document.querySelector(".nav-mobile");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      var open = navMobile.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMobile.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Contact form (client-side only — wire to your backend) */
  var form = document.getElementById("contact-form");
  if (form) {
    var msgOk = document.getElementById("form-success");
    var msgErr = document.getElementById("form-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (msgOk) msgOk.classList.remove("is-success");
      if (msgErr) msgErr.classList.remove("is-error");

      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var message = form.querySelector('[name="message"]');

      if (!name || !email || !message) return;

      function tr(key, fallback) {
        if (window.BrokiesI18n && typeof window.BrokiesI18n.t === "function") {
          return window.BrokiesI18n.t(key);
        }
        return fallback;
      }

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        if (msgErr) {
          msgErr.textContent = tr("form.fillAll", "Please fill in all fields.");
          msgErr.classList.add("is-error");
        }
        return;
      }

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) {
        if (msgErr) {
          msgErr.textContent = tr(
            "form.invalidEmail",
            "Please enter a valid email address."
          );
          msgErr.classList.add("is-error");
        }
        return;
      }

      if (msgOk) {
        msgOk.textContent = tr(
          "form.success",
          "Thank you — your message has been recorded. We will get back to you soon."
        );
        msgOk.classList.add("is-success");
      }
      form.reset();
    });

    document.addEventListener("brokies:langchange", function () {
      if (msgOk) {
        msgOk.textContent = "";
        msgOk.classList.remove("is-success");
      }
      if (msgErr) {
        msgErr.textContent = "";
        msgErr.classList.remove("is-error");
      }
    });
  }

  /* Hero screenshot carousel */
  function carouselDotLabel(n, total) {
    if (window.BrokiesI18n && typeof window.BrokiesI18n.t === "function") {
      return window.BrokiesI18n
        .t("carousel.dot")
        .replace(/\{\{n\}\}/g, String(n))
        .replace(/\{\{total\}\}/g, String(total));
    }
    return "Screenshot " + n + " of " + total;
  }

  function initHeroCarousel() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;

    var track = root.querySelector(".carousel__track");
    var slides = root.querySelectorAll(".carousel__slide");
    var prevBtn = root.querySelector("[data-carousel-prev]");
    var nextBtn = root.querySelector("[data-carousel-next]");
    var frame = root.closest("[data-carousel-root]");
    var dotsHost = frame ? frame.querySelector("[data-carousel-dots]") : null;

    var n = slides.length;
    if (!track || n === 0) return;

    var index = 0;
    var autoplayMs = 5200;
    var timer;

    function updateDotsActive() {
      if (!dotsHost) return;
      var dots = dotsHost.querySelectorAll(".carousel__dot");
      dots.forEach(function (dot, j) {
        var isOn = j === index;
        dot.classList.toggle("is-active", isOn);
        dot.setAttribute("aria-current", isOn ? "true" : "false");
        dot.setAttribute("aria-label", carouselDotLabel(j + 1, n));
      });
    }

    function go(delta) {
      index = (index + delta + n) % n;
      track.style.transform = "translateX(" + -index * 100 + "%)";
      updateDotsActive();
    }

    function startAutoplay() {
      stopAutoplay();
      timer = window.setInterval(function () {
        go(1);
      }, autoplayMs);
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function buildDots() {
      if (!dotsHost) return;
      dotsHost.innerHTML = "";
      for (var i = 0; i < n; i++) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "carousel__dot";
        b.setAttribute("data-slide-index", String(i));
        b.addEventListener("click", function () {
          var j = parseInt(this.getAttribute("data-slide-index"), 10);
          if (!isNaN(j)) {
            index = j;
            track.style.transform = "translateX(" + -index * 100 + "%)";
            updateDotsActive();
            stopAutoplay();
            startAutoplay();
          }
        });
        dotsHost.appendChild(b);
      }
      updateDotsActive();
    }

    buildDots();

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        go(-1);
        stopAutoplay();
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        go(1);
        stopAutoplay();
        startAutoplay();
      });
    }

    root.setAttribute("tabindex", "0");
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
        stopAutoplay();
        startAutoplay();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
        stopAutoplay();
        startAutoplay();
      }
    });

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);
    root.addEventListener("focusin", stopAutoplay);
    root.addEventListener("focusout", startAutoplay);

    document.addEventListener("brokies:langchange", updateDotsActive);

    startAutoplay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeroCarousel);
  } else {
    initHeroCarousel();
  }
})();
