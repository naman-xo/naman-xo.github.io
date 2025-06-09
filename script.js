/* === script.js === */

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glitch hover effect for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = `translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px)`;
    link.style.filter = 'contrast(200%) brightness(130%)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'none';
    link.style.filter = 'none';
  });
});

// Fake loading bar effect on page load
window.addEventListener('load', () => {
  const loadingBar = document.createElement('div');
  loadingBar.style.position = 'fixed';
  loadingBar.style.top = '0';
  loadingBar.style.left = '0';
  loadingBar.style.width = '0';
  loadingBar.style.height = '4px';
  loadingBar.style.background = 'linear-gradient(90deg, cyan, #ad0013)';
  loadingBar.style.zIndex = '1000';
  loadingBar.style.animation = 'loadBar 2s ease forwards';
  document.body.appendChild(loadingBar);

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes loadBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => loadingBar.remove(), 2200);
});