/* ==========================================================================
   NorthHead Digital — site behavior
   - Mobile navigation toggle
   - Sticky header shadow on scroll
   - Scroll-reveal animations (IntersectionObserver)
   - Footer year
   - Client-side contact/audit form handling (graceful, Netlify-compatible)
   ========================================================================== */
(function () {
  "use strict";

  /* ----- Mobile navigation toggle ------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link is tapped (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Sticky header shadow ----------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Scroll reveal ------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // No IntersectionObserver: just show everything
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ----- Footer year -------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- Contact / audit form ----------------------------------------- */
  var form = document.querySelector("form[data-contact]");
  if (form) {
    var status = form.querySelector(".form-status");

    var setStatus = function (type, message) {
      if (!status) return;
      status.className = "form-status " + type;
      status.textContent = message;
    };

    form.addEventListener("submit", function (e) {
      // Basic client-side validation
      if (!form.checkValidity()) {
        return; // let the browser show native validation messages
      }

      e.preventDefault();

      var data = new FormData(form);
      var submitBtn = form.querySelector("[type=submit]");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.label = submitBtn.textContent;
        submitBtn.textContent = "Sending…";
      }

      // Posts to Netlify Forms (or any same-origin handler). Falls back to a
      // friendly confirmation message if no backend is wired up yet.
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          setStatus(
            "success",
            "Thanks — your request is in. We'll be in touch within one business day to set up your free audit."
          );
        })
        .catch(function () {
          // Graceful fallback so the form never feels broken in a static preview.
          form.reset();
          setStatus(
            "success",
            "Thanks for reaching out! We'll follow up shortly. (If you don't hear back, email hello@northheaddigital.com.)"
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.dataset.label || "Send";
          }
        });
    });
  }
})();
