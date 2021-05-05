export function handleNavOnScroll() {
  window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('sticky', window.scrollY>0);
  })
};
