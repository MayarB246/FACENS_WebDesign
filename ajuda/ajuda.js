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

// Animação nos cards de FAQ ao rolar
const faqItems = document.querySelectorAll('.faq-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    }
  });
}, {
  threshold: 0.2
});

faqItems.forEach(item => observer.observe(item));
