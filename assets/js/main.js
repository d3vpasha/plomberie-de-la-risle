// Menu mobile
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  burger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Apparition au défilement
const items = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('in'));
} else {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
}

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulaire -> mailto
document.getElementById('devis').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const f = new FormData(ev.target);
  const body = `Nom : ${f.get('nom')}\nTéléphone : ${f.get('tel')}\nCommune : ${f.get('ville')}\n\n${f.get('besoin')}`;
  window.location.href = 'mailto:plomberie.delarisle@gmail.com?subject=' + encodeURIComponent('Demande de devis') + '&body=' + encodeURIComponent(body);
});
