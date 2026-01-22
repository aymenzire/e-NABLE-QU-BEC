(function () {
    const forms = document.querySelectorAll("[data-form]");
    if (!forms.length) return;
  
    function show(el, type, msg) {
      el.className = `alert ${type}`;
      el.textContent = msg;
      el.hidden = false;
    }
  
    forms.forEach((form) => {
      const status = form.querySelector("[data-form-status]");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!status) return;
  
        const required = Array.from(form.querySelectorAll("[required]"));
        const missing = required.filter((x) => !String(x.value || "").trim());
  
        if (missing.length) {
          show(status, "err", "Oups: il manque des champs obligatoires. Vérifie le formulaire.");
          missing[0].focus();
          return;
        }
  
        show(status, "ok", "Reçu. Pour l’instant, c’est un formulaire local. Ajoute un backend pour l’envoi réel.");
        form.reset();
      });
    });
  })();
  