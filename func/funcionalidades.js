// Zoom
let zoomLevel = 1;
function aplicarZoom() {
  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = 'top center';
}
document.getElementById('zoom-in').addEventListener('click', () => {
  zoomLevel += 0.1;
  aplicarZoom();
});
document.getElementById('zoom-out').addEventListener('click', () => {
  zoomLevel = Math.max(0.5, zoomLevel - 0.1);
  aplicarZoom();
});
document.getElementById('zoom-reset').addEventListener('click', () => {
  zoomLevel = 1;
  aplicarZoom();
});

// Calculadora
document.getElementById('calculate').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacao = document.getElementById('operation').value;
  let resultado = '—';
  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operacao) {
      case 'add': resultado = num1 + num2; break;
      case 'subtract': resultado = num1 - num2; break;
      case 'multiply': resultado = num1 * num2; break;
      case 'divide': resultado = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero'; break;
    }
  } else {
    resultado = 'Insira números válidos';
  }
  document.getElementById('calc-result').textContent = `Resultado: ${resultado}`;
});

// Relógio
function atualizarRelogio() {
  const agora = new Date();
  const hora = agora.toLocaleTimeString('pt-BR');
  document.getElementById('clock').textContent = hora;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Copiar texto
document.getElementById('copy-button').addEventListener('click', () => {
  const texto = document.getElementById('copy-source').value;
  navigator.clipboard.writeText(texto).then(() => {
    document.getElementById('copy-status').textContent = 'Texto copiado com sucesso!';
  }).catch(() => {
    document.getElementById('copy-status').textContent = 'Erro ao copiar o texto.';
  });
});

// Validação
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const emailFeedback = document.getElementById('email-feedback');
const senhaFeedback = document.getElementById('senha-feedback');
const statusFormulario = document.getElementById('form-status');

email.addEventListener('input', () => {
  emailFeedback.textContent = email.validity.valid ? '' : 'Email inválido';
});

senha.addEventListener('input', () => {
  senhaFeedback.textContent = senha.value.length >= 6 ? '' : 'A senha deve ter pelo menos 6 caracteres';
});

document.getElementById('config-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.validity.valid && senha.value.length >= 6) {
    statusFormulario.textContent = 'Formulário enviado com sucesso!';
  } else {
    statusFormulario.textContent = 'Preencha os campos corretamente.';
  }
});

// Typewriter
const titulo = document.getElementById('titulo-digitado');
const textoOriginal = titulo.textContent;
titulo.textContent = '';
let i = 0;

function digitarTexto() {
  if (i < textoOriginal.length) {
    titulo.textContent += textoOriginal.charAt(i);
    i++;
    setTimeout(digitarTexto, 80);
  }
}
digitarTexto();
