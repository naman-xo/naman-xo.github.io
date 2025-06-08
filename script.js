/* === script.js === */

// Smooth scroll is handled via CSS (scroll-behavior: smooth), but for browsers that don't support it:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glitch hover effect
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    link.style.filter = 'contrast(200%) brightness(150%)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'none';
    link.style.filter = 'none';
  });
});

// Loading bar FX (fake placeholder logic)
window.addEventListener('load', () => {
  const bar = document.createElement('div');
  bar.style.position = 'fixed';
  bar.style.top = '0';
  bar.style.left = '0';
  bar.style.width = '100%';
  bar.style.height = '3px';
  bar.style.background = 'linear-gradient(90deg, cyan, var(--red))';
  bar.style.animation = 'loadBar 2s ease-out forwards';
  document.body.appendChild(bar);

  setTimeout(() => bar.remove(), 2200);
});

// Add CSS animation via JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes loadBar {
  0% { width: 0%; }
  100% { width: 100%; }
}`;
document.head.appendChild(style);