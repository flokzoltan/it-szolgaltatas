/**
 * APP CONTROLLER — selector cache + lazy interaction boot
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AppModel === 'undefined') {
    console.error('AppModel hiányzik (model.js).');
    return;
  }
  AppController.boot();
});

const AppController = {
  _els: null,
  _faqBound: false,
  _obs: null,

  boot() {
    this.cacheDom();
    this.applyLanguage(AppModel.getSavedLang());
    this.bindLangSwitch();
    this.lazyBootInteractions();
  },

  cacheDom() {
    this._els = {
      i18n: document.querySelectorAll('[data-i18n]'),
      i18nHtml: document.querySelectorAll('[data-i18n-html]'),
      contactName: document.querySelectorAll('[data-contact="name"]'),
      contactPhoneText: document.querySelectorAll('[data-contact="phone-text"]'),
      contactEmailText: document.querySelectorAll('[data-contact="email-text"]'),
      contactPhoneLink: document.querySelectorAll('[data-contact="phone-link"]'),
      contactEmailLink: document.querySelectorAll('[data-contact="email-link"]'),
      langBtns: document.querySelectorAll('.lang-btn'),
      langSwitch: document.querySelector('.lang-switch'),
      faq: document.querySelector('.faq'),
      reveals: document.querySelectorAll('[data-reveal]'),
      metaDesc: document.querySelector('meta[name="description"]')
    };
  },

  /** FAQ + scroll-reveal only after first interaction or when content nears viewport */
  lazyBootInteractions() {
    const start = () => {
      if (!this._faqBound) {
        this.bindFaq();
        this.initScrollObserver();
        this._faqBound = true;
      }
      window.removeEventListener('scroll', onScroll, { passive: true });
      window.removeEventListener('pointerdown', start, { passive: true });
      window.removeEventListener('keydown', start);
      window.removeEventListener('touchstart', start, { passive: true });
    };

    const onScroll = () => {
      if (window.scrollY > 80) start();
    };

    // If user already scrolled (e.g. restore), boot immediately
    if (window.scrollY > 80) {
      start();
      return;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointerdown', start, { passive: true, once: true });
    window.addEventListener('keydown', start, { once: true });
    window.addEventListener('touchstart', start, { passive: true, once: true });

    // Safety: boot after 3s even without interaction (SEO / slow scrollers)
    setTimeout(start, 2500);
  },

  bindLangSwitch() {
    const sw = this._els.langSwitch;
    if (!sw) return;
    sw.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang');
      if (!lang || lang === AppModel.currentLang) return;
      document.querySelectorAll('.faq-item.open').forEach((item) => this.closeFaqItem(item));
      this.applyLanguage(lang);
    });
  },

  bindFaq() {
    const root = this._els.faq;
    if (!root) return;
    root.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-q');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      root.querySelectorAll('.faq-item.open').forEach((el) => {
        if (el !== item) this.closeFaqItem(el);
      });
      if (open) this.closeFaqItem(item);
      else this.openFaqItem(item, btn);
    });
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

    const els = this._els;
    requestAnimationFrame(() => {
      els.i18n.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      els.i18nHtml.forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });

      els.contactName.forEach((el) => { el.textContent = contact.name; });
      els.contactPhoneText.forEach((el) => { el.textContent = contact.phoneText; });
      els.contactEmailText.forEach((el) => { el.textContent = contact.emailText; });
      els.contactPhoneLink.forEach((el) => el.setAttribute('href', contact.phoneHref));
      els.contactEmailLink.forEach((el) => el.setAttribute('href', contact.emailHref));

      if (dict['page.title']) document.title = dict['page.title'];
      if (els.metaDesc && dict['page.desc']) els.metaDesc.setAttribute('content', dict['page.desc']);

      document.documentElement.setAttribute('lang', lang);
      els.langBtns.forEach((btn) => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
      });
    });
  },

  initScrollObserver() {
    const nodes = this._els.reveals;
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((el) => el.classList.add('in'));
      return;
    }

    this._obs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          requestAnimationFrame(() => entry.target.classList.add('in'));
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    nodes.forEach((el) => this._obs.observe(el));
  }
};
