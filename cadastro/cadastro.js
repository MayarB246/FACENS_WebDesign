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
