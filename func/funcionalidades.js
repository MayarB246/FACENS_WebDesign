// ==========================
// Efeito de digitação no título
// ==========================
const titulo = document.getElementById('titulo-digitado');
if (titulo) {
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
}

// ==========================
// Função de Zoom
// ==========================
let zoomLevel = 1;

function aplicarZoom() {
  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = 'top center';
  document.body.style.transition = 'transform 0.2s ease';
}

const btnZoomIn = document.getElementById('zoom-in');
const btnZoomOut = document.getElementById('zoom-out');
const btnZoomReset = document.getElementById('zoom-reset');

if (btnZoomIn) btnZoomIn.addEventListener('click', () => { zoomLevel += 0.1; aplicarZoom(); });
if (btnZoomOut) btnZoomOut.addEventListener('click', () => { zoomLevel = Math.max(0.5, zoomLevel - 0.1); aplicarZoom(); });
if (btnZoomReset) btnZoomReset.addEventListener('click', () => { zoomLevel = 1; aplicarZoom(); });

// ==========================
// Calculadora
// ==========================
const calcBtn = document.getElementById('calculate');
if (calcBtn) {
  calcBtn.addEventListener('click', () => {
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
}

// ==========================
// Relógio Digital
// ==========================
const clock = document.getElementById('clock');
function atualizarRelogio() {
  if (clock) {
    const agora = new Date();
    clock.textContent = agora.toLocaleTimeString('pt-BR');
  }
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// ==========================
// Copiar Texto
// ==========================
const copyBtn = document.getElementById('copy-button');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const texto = document.getElementById('copy-source').value;
    const status = document.getElementById('copy-status');
    navigator.clipboard.writeText(texto)
      .then(() => {
        if (status) { status.textContent = 'Texto copiado com sucesso!'; status.style.color = '#9370DB'; }
      })
      .catch(() => {
        if (status) { status.textContent = 'Erro ao copiar o texto.'; status.style.color = 'red'; }
      });
  });
}

// ==========================
// Validação de Formulário
// ==========================
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const emailFeedback = document.getElementById('email-feedback');
const senhaFeedback = document.getElementById('senha-feedback');
const statusFormulario = document.getElementById('form-status');

if (email) {
  email.addEventListener('input', () => {
    if (emailFeedback) emailFeedback.textContent = email.validity.valid ? '' : 'Email inválido';
  });
}

if (senha) {
  senha.addEventListener('input', () => {
    if (senhaFeedback) senhaFeedback.textContent = senha.value.length >= 6 ? '' : 'A senha deve ter pelo menos 6 caracteres';
  });
}

const form = document.getElementById('config-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email && senha && statusFormulario) {
      if (email.validity.valid && senha.value.length >= 6) {
        statusFormulario.textContent = 'Formulário enviado com sucesso!';
        statusFormulario.style.color = '#9370DB';
      } else {
        statusFormulario.textContent = 'Preencha os campos corretamente.';
        statusFormulario.style.color = 'red';
      }
    }
  });
}

// ==========================
// Botão "Voltar ao Topo"
// ==========================
const voltarBtn = document.createElement('button');
voltarBtn.classList.add('voltar-topo');
voltarBtn.textContent = '↑ Topo';
document.body.appendChild(voltarBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    voltarBtn.style.display = 'block';
    voltarBtn.style.opacity = '1';
  } else {
    voltarBtn.style.opacity = '0';
    setTimeout(() => {
      if (window.scrollY <= 150) voltarBtn.style.display = 'none';
    }, 300);
  }
});

voltarBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
