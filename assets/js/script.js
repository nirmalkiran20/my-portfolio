// ==== Dark/Light Mode Toggle ====
const modeToggle = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode');

// Apply saved mode on load
if (currentMode === 'light') {
  document.body.classList.add('light-mode');
  modeToggle.textContent = '🌙';
} else {
  modeToggle.textContent = '☀️';
}

// Toggle mode on click
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('mode', isLight ? 'light' : 'dark');
  modeToggle.textContent = isLight ? '🌙' : '☀️';
});


// ==== Scroll Progress Bar ====
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrollPercent}%`;
});


// ==== (Optional) Mobile Nav Toggle – Future Use ====
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
