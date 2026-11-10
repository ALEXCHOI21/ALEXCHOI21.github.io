const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
}));
document.getElementById('copy-contact').addEventListener('click', () => {
  document.getElementById('contact-note').textContent = '공식 문의 이메일·전화번호가 확정되면 이곳에 연결합니다.';
});
document.querySelector('[data-placeholder-mail]').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('contact-note').textContent = '공식 문의 이메일·전화번호가 확정되면 이곳에 연결합니다.';
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
