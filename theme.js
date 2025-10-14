// theme.js

// Aplica tema salvo ao carregar
const savedTheme = localStorage.getItem('vueloTheme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Alterna tema ao clicar em botão com id="toggle-theme"
const toggleBtn = document.getElementById('toggle-theme');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('vueloTheme', newTheme);
  });
}
