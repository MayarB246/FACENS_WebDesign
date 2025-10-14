// Alternância de tema
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem('vueloTheme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
}

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('vueloTheme', newTheme);
});

// Limpar dados salvos
const clearDataBtn = document.getElementById('clear-data');
clearDataBtn.addEventListener('click', () => {
  const confirmClear = confirm("Tem certeza que deseja apagar todos os dados salvos?");
  if (confirmClear) {
    localStorage.removeItem('vueloLeadsData');
    localStorage.removeItem('vueloUsers');
    alert("Dados apagados com sucesso!");
  }
});
