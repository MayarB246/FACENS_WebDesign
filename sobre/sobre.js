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
const voltarBtn = document.createElement('button');
voltarBtn.textContent = '↑ Topo';
voltarBtn.className = 'voltar-topo';
document.body.appendChild(voltarBtn);

voltarBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  voltarBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});