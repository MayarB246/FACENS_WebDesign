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

// Simulação de envio
document.getElementById('cadastro-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensagem-status').textContent = 'Estabelecimento cadastrado com sucesso!';
});

// Criar o botão
const voltarBtn = document.createElement('button');
voltarBtn.textContent = '↑ Topo';
voltarBtn.className = 'voltar-topo';
document.body.appendChild(voltarBtn);

// Rolar ao topo ao clicar
voltarBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar/esconder o botão ao rolar
window.addEventListener('scroll', () => {
  voltarBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
