/**
 * APP CONTROLLER (Optimalizált)
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
    // 1. Language Switcher - Delegálás
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
      langSwitch.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (btn) {
          const lang = btn.getAttribute('data-lang');
          this.applyLanguage(lang);
        }
      });
    }

    // 2. FAQ Accordion - Delegálás
    const faqContainer = document.querySelector('.faq');
    if (faqContainer) {
      faqContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.faq-q');
        if (!btn) return;

        const currentItem = btn.closest('.faq-item');
        const currentPanel = currentItem.querySelector('.faq-a');
        const isOpen = currentItem.classList.contains('open');

        // Összes többi panel bezárása
        faqContainer.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== currentItem) {
            this.closeFaqItem(openItem);
          }
        });

        // Jelenlegi panel toggle
        if (isOpen) {
          this.closeFaqItem(currentItem);
        } else {
          this.openFaqItem(currentItem, btn, currentPanel);
        }
      });
    }
  },

 openFaqItem(item, btn) {
  item.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
},

closeFaqItem(item) {
  item.classList.remove('open');
  const btn = item.querySelector('.faq-q');
  if (btn) btn.setAttribute('aria-expanded', 'false');
},

  applyLanguage(lang) {
    AppModel.setLang(lang);
    const dict = AppModel.i18n[lang];
    const contact = AppModel.contactData[lang];

    // DOM Csatolások gyorsítása egyetlen lépésben
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Kontakt adatok frissítése
    const contactMap = {
      'name': contact.name,
      'phone-text': contact.phoneText,
      'email-text': contact.emailText
    };

    Object.entries(contactMap).forEach(([key, val]) => {
      document.querySelectorAll(`[data-contact="${key}"]`).forEach(el => el.textContent = val);
    });

    document.querySelectorAll('[data-contact="phone-link"]').forEach(el => el.setAttribute('href', contact.phoneHref));
    document.querySelectorAll('[data-contact="email-link"]').forEach(el => el.setAttribute('href', contact.emailHref));

    // Gyökér elem és nyelvi gombok
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  },

  initScrollObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.01,
      rootMargin: '0px 0px -50px 0px' 
    });

    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach(el => observer.observe(el));
  }
};
