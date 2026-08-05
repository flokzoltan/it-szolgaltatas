/**
 * APP CONTROLLER (CLS & Reflow Optimised)
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AppModel !== 'undefined') {
    AppController.init();
  } else {
    console.error('AppModel nem található! Ellenőrizd a model.js betöltését.');
  }
});

const AppController = {
  init() {
    const savedLang = AppModel.getSavedLang();
    // Mindig szinkronizáljuk a model adatait (név, telefon, email, i18n)
    this.applyLanguage(savedLang);
    this.bindEvents();
    this.initScrollObserver();
  },

  bindEvents() {
    // 1. Language Switcher
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
      langSwitch.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== AppModel.currentLang) {
          // Nyelvváltáskor zárjuk a nyitott FAQ-okat
          document.querySelectorAll('.faq-item.open').forEach(item => this.closeFaqItem(item));
          this.applyLanguage(lang);
        }
      });
    }

    // 2. FAQ Accordion (egyszerre csak egy nyitva)
    const faqContainer = document.querySelector('.faq');
    if (faqContainer) {
      faqContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.faq-q');
        if (!btn) return;

        const currentItem = btn.closest('.faq-item');
        const isOpen = currentItem.classList.contains('open');

        faqContainer.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== currentItem) {
            this.closeFaqItem(openItem);
          }
        });

        if (isOpen) {
          this.closeFaqItem(currentItem);
        } else {
          this.openFaqItem(currentItem, btn);
        }
      });
    }
  },

  openFaqItem(item, btn) {
    item.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
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
    if (!dict || !contact) return;

    requestAnimationFrame(() => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });

      const contactMap = {
        'name': contact.name,
        'phone-text': contact.phoneText,
        'email-text': contact.emailText
      };
      Object.entries(contactMap).forEach(([key, val]) => {
        document.querySelectorAll(`[data-contact="${key}"]`).forEach(el => {
          el.textContent = val;
        });
      });

      document.querySelectorAll('[data-contact="phone-link"]').forEach(el => {
        el.setAttribute('href', contact.phoneHref);
      });
      document.querySelectorAll('[data-contact="email-link"]').forEach(el => {
        el.setAttribute('href', contact.emailHref);
      });

      if (dict['page.title']) document.title = dict['page.title'];
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict['page.desc']) {
        metaDesc.setAttribute('content', dict['page.desc']);
      }

      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
      });
    });
  },

  initScrollObserver() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('in');
          });
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }
};
