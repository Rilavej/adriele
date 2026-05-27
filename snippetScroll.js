window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const percentage = Math.round((scrolled / scrollable) * 100);
  console.log(`Scroll: ${percentage}%`);
});

window.onscroll = () => {
  const p = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  console.clear(); // Limpa para não encher o console
  console.log(`Posição do Scroll: ${p}% | Pixels: ${window.scrollY}px`);
};