// Efeito de digitação no título
const titulo = document.getElementById('titulo-digitado');
const textoOriginal = titulo.textContent;
titulo.textContent = '';
let i = 0;

function digitarTexto() {
  if (i < textoOriginal.length) {
    titulo.textContent += textoOriginal.charAt(i);
    i++;
    setTimeout(digitarTexto, 70);
  }
}

digitarTexto();

// Botão "Voltar ao topo"
const voltarBtn = document.querySelector('.voltar-topo');

window.addEventListener('scroll', () => {
  // Mostra o botão mesmo se a página for curta
 voltarBtn.style.display = 'block';
});

voltarBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
