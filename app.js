/**
 * APP CONTROLLER
 * A nyelvi változatok külön, indexelhető URL-en élnek.
 * Ez a fájl csak a kliensoldali interakciókat kezeli.
 */
document.addEventListener('DOMContentLoaded', () => {
  initServiceToggles();
  initFaq();
});

function initServiceToggles() {
  const root = document.getElementById('szolgaltatasok');
  if (!root) return;

  root.addEventListener('click', (event) => {
    const button = event.target.closest('.svc-toggle');
    if (!button || !root.contains(button)) return;

    const targetId = button.getAttribute('aria-controls');
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) return;

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.toggleAttribute('hidden', isOpen);
    panel.setAttribute('aria-hidden', String(isOpen));

    const more = button.querySelector('.svc-toggle-label-more');
    const less = button.querySelector('.svc-toggle-label-less');
    if (more) more.toggleAttribute('hidden', !isOpen);
    if (less) less.toggleAttribute('hidden', isOpen);
  });
}

function initFaq() {
  const root = document.querySelector('.faq');
  if (!root) return;

  root.addEventListener('click', (event) => {
    const button = event.target.closest('.faq-q');
    if (!button || !root.contains(button)) return;

    const item = button.closest('.faq-item');
    if (!item) return;
    const wasOpen = item.classList.contains('open');

    root.querySelectorAll('.faq-item.open').forEach((openItem) => {
      if (openItem !== item) closeFaq(openItem);
    });

    if (wasOpen) closeFaq(item);
    else openFaq(item, button);
  });

  root.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const item = event.target.closest('.faq-item.open');
    if (!item || !root.contains(item)) return;
    const button = item.querySelector('.faq-q');
    closeFaq(item);
    button?.focus();
  });
}

function openFaq(item, button) {
  const panel = item.querySelector('.faq-a');
  item.classList.add('open');
  button.setAttribute('aria-expanded', 'true');
  if (!panel) return;

  panel.setAttribute('aria-hidden', 'false');
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  panel.addEventListener('transitionend', () => {
    if (item.classList.contains('open')) panel.style.maxHeight = 'none';
  }, { once: true });
}

function closeFaq(item) {
  const button = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');
  if (button) button.setAttribute('aria-expanded', 'false');
  if (panel) {
    panel.setAttribute('aria-hidden', 'true');
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    void panel.offsetHeight;
    panel.style.maxHeight = '0px';
  }
  item.classList.remove('open');
}
