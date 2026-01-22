(function () {
    const yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  
    const menuBtn = document.querySelector("[data-menu-btn]");
    const nav = document.querySelector("[data-navlinks]");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        const open = nav.getAttribute("data-open") === "true";
        nav.setAttribute("data-open", String(!open));
        nav.style.display = open ? "none" : "flex";
        menuBtn.setAttribute("aria-expanded", String(!open));
      });
  
      const mq = window.matchMedia("(min-width: 881px)");
      const apply = () => {
        if (mq.matches) {
          nav.style.display = "flex";
          nav.setAttribute("data-open", "true");
          menuBtn.setAttribute("aria-expanded", "true");
        } else {
          nav.style.display = "none";
          nav.setAttribute("data-open", "false");
          menuBtn.setAttribute("aria-expanded", "false");
        }
      };
      mq.addEventListener("change", apply);
      apply();
    }
  })();
  