(function () {
    const STORAGE_KEY = "enableqc_lang";
    const DEFAULT_LANG = "fr";
  
    const dict = {
      fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_get: "Recevoir un dispositif",
        nav_volunteer: "Bénévolat",
        nav_resources: "Ressources",
        nav_donate: "Donner",
        nav_contact: "Contact",
  
        hero_title: "e-NABLE Québec",
        hero_sub: "Technologie pour l’inclusion. Des dispositifs d’assistance imprimés en 3D, offerts gratuitement grâce à une communauté de bénévoles.",
        hero_cta_primary: "Demander un dispositif",
        hero_cta_secondary: "Devenir bénévole",
  
        kpi_1_title: "Gratuit",
        kpi_1_sub: "Pour les bénéficiaires",
        kpi_2_title: "Communautaire",
        kpi_2_sub: "Étudiants, pros, makers",
        kpi_3_title: "Open-source",
        kpi_3_sub: "Modèles et outils partagés",
  
        sec_how_title: "Comment ça marche",
        sec_how_lead: "Un parcours simple, humain et sécuritaire pour aider au Québec.",
        how_1_title: "Demande",
        how_1_desc: "Tu remplis un formulaire avec tes besoins et tes mesures. On confirme l’admissibilité et les délais.",
        how_2_title: "Conception",
        how_2_desc: "On choisit un modèle open-source adapté et on ajuste l’assemblage selon ton profil.",
        how_3_title: "Fabrication",
        how_3_desc: "Un bénévole imprime, assemble, vérifie la qualité, puis planifie la remise du dispositif.",
  
        sec_safety_title: "Sécurité et limites",
        sec_safety_lead: "On fait de notre mieux, mais ce ne sont pas des dispositifs médicaux certifiés.",
        safety_b1: "Dispositifs d’assistance non médicaux (non certifiés).",
        safety_b2: "Ajustement et suivi recommandés avec un professionnel (ergothérapie, etc.).",
        safety_b3: "Protection des données: on collecte le minimum nécessaire.",
  
        callout_title: "Envie de lancer ça à Polytechnique, McGill, UdeM ou ailleurs",
        callout_desc: "On peut monter une équipe locale: makers, impression 3D, design, validation, logistique.",
        callout_btn: "Voir la page bénévolat",
  
        footer_tag: "Une initiative communautaire inspirée du réseau e-NABLE international.",
        footer_links: "Liens",
        footer_contact: "Nous joindre",
        footer_note: "Ce site est un prototype. Remplace les textes et ajoute tes vraies infos."
      },
      en: {
        nav_home: "Home",
        nav_about: "About",
        nav_get: "Get a device",
        nav_volunteer: "Volunteer",
        nav_resources: "Resources",
        nav_donate: "Donate",
        nav_contact: "Contact",
  
        hero_title: "e-NABLE Québec",
        hero_sub: "Technology for inclusion. 3D-printed assistive devices, provided for free thanks to a volunteer community.",
        hero_cta_primary: "Request a device",
        hero_cta_secondary: "Become a volunteer",
  
        kpi_1_title: "Free",
        kpi_1_sub: "For recipients",
        kpi_2_title: "Community-driven",
        kpi_2_sub: "Students, pros, makers",
        kpi_3_title: "Open-source",
        kpi_3_sub: "Shared models and tools",
  
        sec_how_title: "How it works",
        sec_how_lead: "A simple, human, and safer path to help in Québec.",
        how_1_title: "Request",
        how_1_desc: "You fill out a form with your needs and measurements. We confirm eligibility and timelines.",
        how_2_title: "Design",
        how_2_desc: "We choose a suitable open-source model and adjust assembly to your profile.",
        how_3_title: "Build",
        how_3_desc: "A volunteer prints, assembles, checks quality, then plans the handover.",
  
        sec_safety_title: "Safety and limits",
        sec_safety_lead: "We do our best, but these are not certified medical devices.",
        safety_b1: "Non-medical assistive devices (not certified).",
        safety_b2: "Fitting and follow-up recommended with a professional (OT, etc.).",
        safety_b3: "Data privacy: we collect only what is needed.",
  
        callout_title: "Want to launch this at Polytechnique, McGill, UdeM, or elsewhere",
        callout_desc: "We can build a local team: makers, 3D printing, design, validation, logistics.",
        callout_btn: "See volunteer page",
  
        footer_tag: "A community initiative inspired by the international e-NABLE network.",
        footer_links: "Links",
        footer_contact: "Contact us",
        footer_note: "This website is a prototype. Replace text and add your real info."
      }
    };
  
    function getLang() {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "en" || saved === "fr" ? saved : DEFAULT_LANG;
    }
  
    function setLang(lang) {
      localStorage.setItem(STORAGE_KEY, lang);
      applyLang(lang);
    }
  
    function applyLang(lang) {
      document.documentElement.setAttribute("lang", lang);
      const nodes = document.querySelectorAll("[data-i18n]");
      nodes.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const val = dict[lang]?.[key];
        if (typeof val === "string") el.textContent = val;
      });
  
      const toggle = document.querySelector("[data-lang-toggle]");
      if (toggle) {
        toggle.textContent = lang === "fr" ? "FR" : "EN";
        toggle.setAttribute("aria-label", lang === "fr" ? "Basculer en anglais" : "Switch to French");
      }
    }
  
    const lang = getLang();
    applyLang(lang);
  
    const toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = getLang() === "fr" ? "en" : "fr";
        setLang(next);
      });
    }
  })();
  