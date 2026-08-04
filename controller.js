/**
 * APP CONTROLLER
 * Felelős az eseménykezelésért és a Model / View szinkronizációjáért.
 */
document.addEventListener('DOMContentLoaded', () => {
  AppController.init();
});

const AppController = {
  init() {
    const savedLang = AppModel.getSavedLang();
    this.applyLanguage(savedLang);
    this.bindEvents();
    this.initScrollObserver();
  },

  bindEvents() {
    // Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.applyLanguage(lang);
      });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q');
      const panel = item.querySelector('.faq-a');

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close other open panels
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-a').style.maxHeight = null;
            openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current panel
        if (isOpen) {
          item.classList.remove('open');
          panel.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  },

  applyLanguage(lang) {
    AppModel.setLang(lang);
    const dict = AppModel.i18n[lang];
    const contact = AppModel.contactData[lang];

    // Update Text Translation Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update HTML Translation Elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update Contact Details
    document.querySelectorAll('[data-contact="name"]').forEach(el => el.textContent = contact.name);
    document.querySelectorAll('[data-contact="phone-text"]').forEach(el => el.textContent = contact.phoneText);
    document.querySelectorAll('[data-contact="phone-link"]').forEach(el => el.setAttribute('href', contact.phoneHref));
    document.querySelectorAll('[data-contact="email-text"]').forEach(el => el.textContent = contact.emailText);
    document.querySelectorAll('[data-contact="email-link"]').forEach(el => el.setAttribute('href', contact.emailHref));

    // Update Root Lang attribute & Active Buttons
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Recalculate open FAQ heights if language changed
    document.querySelectorAll('.faq-item.open').forEach(item => {
      const panel = item.querySelector('.faq-a');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  },

  initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }
};