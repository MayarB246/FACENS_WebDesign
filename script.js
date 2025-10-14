document.addEventListener('DOMContentLoaded', () => {
    // --- INICIALIZAÇÃO DAS ABAS ---
    function initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.getAttribute('data-tab');
                
                // Remove active class de todos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Adiciona active class no selecionado
                button.classList.add('active');
                document.getElementById(tabName + 'Tab').classList.add('active');
            });
        });
    }

    // --- LÓGICA DE CADASTRO ---
    function initCadastro() {
        document.getElementById('cadastroForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const cadastroMessage = document.getElementById('cadastroMessage');

            if (newPassword !== confirmPassword) {
                cadastroMessage.textContent = 'As senhas não coincidem.';
                cadastroMessage.style.color = '#e74c3c';
                return;
            }

            if (newPassword.length < 6) {
                cadastroMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                cadastroMessage.style.color = '#e74c3c';
                return;
            }

            // Salvar no localStorage
            const users = JSON.parse(localStorage.getItem('vueloUsers')) || {};
            
            if (users[newUsername]) {
                cadastroMessage.textContent = 'Usuário já existe.';
                cadastroMessage.style.color = '#e74c3c';
                return;
            }

            users[newUsername] = newPassword;
            localStorage.setItem('vueloUsers', JSON.stringify(users));
            
            cadastroMessage.textContent = 'Cadastro realizado com sucesso! Faça login.';
            cadastroMessage.style.color = '#27ae60';
            
            // Limpar formulário
            document.getElementById('cadastroForm').reset();
            
            // Voltar para a aba de login após 2 segundos
            setTimeout(() => {
                document.querySelector('[data-tab="login"]').click();
            }, 2000);
        });
    }

    // --- LÓGICA DE LOGIN ---
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        // Verificar no localStorage
        const users = JSON.parse(localStorage.getItem('vueloUsers')) || {};
        const validUser = users[username];

        if (validUser && password === validUser) {
            // Esconde a tela de login
            document.getElementById('loginSection').style.display = 'none';
            // Mostra a plataforma
            document.getElementById('appSection').style.display = 'block';
            // Inicia a aplicação principal
            initializeApp();
        } else {
            errorMessage.textContent = 'Usuário ou senha inválidos.';
        }
    });

    // Inicializar abas e cadastro
    initTabs();
    initCadastro();
});

// =================================================================================
// DADOS INICIAIS E GERENCIAMENTO DE ESTADO
// =================================================================================
let establishments = [];

async function loadEstablishments() {
  const localData = localStorage.getItem('vueloLeadsData');
  if (localData) {
    establishments = JSON.parse(localData);
    console.log('Dados carregados do localStorage:', establishments.length);
  } else {
    try {
      const response = await fetch('data/establishments.json');
      const json = await response.json();
      console.log('Dados carregados do JSON:', json.length); // 👈 teste
      establishments = json;
      saveToLocalStorage();
    } catch (error) {
      console.error('Erro ao carregar JSON:', error);
    }
  }
}

function saveToLocalStorage() {
    localStorage.setItem('vueloLeadsData', JSON.stringify(establishments));
}

// =================================================================================
// INICIALIZAÇÃO DA APLICAÇÃO PRINCIPAL
// =================================================================================
async function initializeApp() {
  await loadEstablishments(); // aguarda os dados
  populateTable(establishments); // exibe todos
  initCharts(); // atualiza gráficos
  updateStatusCounters(establishments); // atualiza contador
  console.log('Total de leads carregados:', establishments.length);


  // eventos
  document.getElementById('applyFilters').addEventListener('click', applyFilters);
  document.getElementById('resetFilters').addEventListener('click', resetFilters);
  document.getElementById('searchBtn').addEventListener('click', searchEstablishments);
  document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchEstablishments();
  });
  document.getElementById('closeModal').addEventListener('click', closeDetailsModal);
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailsModal')) closeDetailsModal();
  });
}


// =================================================================================
// RENDERIZAÇÃO DA INTERFACE (UI)
// =================================================================================
function updateStatusCounters(data = establishments) {
  document.getElementById('total-count').textContent = data.length;
  document.getElementById('frios-count').textContent = data.filter(e => e.status === 'frio').length;
  document.getElementById('mornos-count').textContent = data.filter(e => e.status === 'morno').length;
  document.getElementById('quentes-count').textContent = data.filter(e => e.status === 'quente').length;
}


function populateTable(data) {
    const tableBody = document.getElementById('establishmentsTable');
    tableBody.innerHTML = '';
    
    data.forEach((establishment, index) => {
        let statusClass = 'status-sem', statusText = 'Sem Status';
        if (establishment.status === 'frio') { statusClass = 'status-frio'; statusText = 'Frio'; }
        else if (establishment.status === 'morno') { statusClass = 'status-morno'; statusText = 'Morno'; }
        else if (establishment.status === 'quente') { statusClass = 'status-quente'; statusText = 'Quente'; }
        
        const originalIndex = establishments.findIndex(e =>
            e.name === establishment.name &&
            e.address === establishment.address &&
            e.type === establishment.type
        );


        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="etapas-lead">
                    <div class="etapa-check">
                        <div class="etapa-bolinha ${establishment.etapas.etapa1 ? 'checked' : ''}" onclick="toggleEtapa(${originalIndex}, 'etapa1')">${establishment.etapas.etapa1 ? '✓' : ''}</div>
                        <div class="etapa-label">1º Contato</div>
                    </div>
                    <div class="etapa-check">
                        <div class="etapa-bolinha ${establishment.etapas.etapa2 ? 'checked' : ''}" onclick="toggleEtapa(${originalIndex}, 'etapa2')">${establishment.etapas.etapa2 ? '✓' : ''}</div>
                        <div class="etapa-label">2º Contato</div>
                    </div>
                    <div class="etapa-check">
                        <div class="etapa-bolinha ${establishment.etapas.etapa3 ? 'checked' : ''}" onclick="toggleEtapa(${originalIndex}, 'etapa3')">${establishment.etapas.etapa3 ? '✓' : ''}</div>
                        <div class="etapa-label">3º Contato</div>
                    </div>
                </div>
            </td>
            <td>${establishment.name}</td>
            <td><div class="status-lead"><button class="status-btn ${statusClass}" onclick="cycleLeadStatus(${originalIndex})">${statusText}</button></div></td>
            <td><button class="action-btn" onclick="showDetails(${originalIndex})"><i class="fas fa-info-circle"></i> Detalhes</button></td>
        `;
        tableBody.appendChild(row);
    });
    
    updateStatusCounters();
}

function initCharts() {
    const typeCounts = {
        'Açougue': establishments.filter(e => e.type === 'Açougue').length,
        'Joalheria': establishments.filter(e => e.type === 'Joalheria').length,
        'Restaurante': establishments.filter(e => e.type === 'Restaurante').length
    };
    const statusCounts = {
        'Frio': establishments.filter(e => e.status === 'frio').length,
        'Morno': establishments.filter(e => e.status === 'morno').length,
        'Quente': establishments.filter(e => e.status === 'quente').length,
        'Sem Status': establishments.filter(e => !e.status || e.status === '').length
    };
    
    const typeCtx = document.getElementById('typeChart').getContext('2d');
    if (window.typeChartInstance) window.typeChartInstance.destroy();
    window.typeChartInstance = new Chart(typeCtx, {
        type: 'pie', data: {
            labels: Object.keys(typeCounts),
            datasets: [{ data: Object.values(typeCounts), backgroundColor: ['#FFD700', '#9370DB', '#3498db'] }]
        }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
    
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    if (window.statusChartInstance) window.statusChartInstance.destroy();
    window.statusChartInstance = new Chart(statusCtx, {
        type: 'doughnut', data: {
            labels: Object.keys(statusCounts),
            datasets: [{ data: Object.values(statusCounts), backgroundColor: ['#3498db', '#f39c12', '#e74c3c', '#95a5a6'] }]
        }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
}

// =================================================================================
// MANIPULADORES DE EVENTOS E INTERAÇÕES
// =================================================================================
function cycleLeadStatus(index) {
  const statusOrder = ['', 'frio', 'morno', 'quente'];
  const currentStatus = establishments[index].status;
  const nextIndex = (statusOrder.indexOf(currentStatus) + 1) % statusOrder.length;
  establishments[index].status = statusOrder[nextIndex];
  saveToLocalStorage();
  populateTable(establishments); // ✅ atualiza sem filtros
  initCharts();
}


function toggleEtapa(index, etapa) {
    establishments[index].etapas[etapa] = !establishments[index].etapas[etapa];
    saveToLocalStorage();
    applyFilters();
}

function showDetails(index) {
    const establishment = establishments[index];
    document.getElementById('modalBody').innerHTML = `
        <div class="detail-item"><span class="detail-label">Nome:</span><span class="detail-value">${establishment.name}</span></div>
        <div class="detail-item"><span class="detail-label">Tipo:</span><span class="detail-value">${establishment.type}</span></div>
        <div class="detail-item"><span class="detail-label">Telefone:</span><span class="detail-value">${establishment.phone}</span></div>
        <div class="detail-item"><span class="detail-label">Endereço:</span><span class="detail-value">${establishment.address}</span></div>
        <div class="detail-item"><span class="detail-label">Bairro:</span><span class="detail-value">${establishment.neighborhood}</span></div>
        <div class="detail-item"><span class="detail-label">Status:</span><span class="detail-value">${establishment.status ? establishment.status.charAt(0).toUpperCase() + establishment.status.slice(1) : 'Sem status'}</span></div>
        <div class="observations">
            <div class="detail-label">Observações:</div>
            <textarea id="observationsText" placeholder="Adicione observações sobre este lead...">${establishment.observacoes || ''}</textarea>
        </div>
        <button class="save-btn" onclick="saveObservations(${index})">Salvar Observações</button>
    `;
    document.getElementById('detailsModal').style.display = 'flex';
}

function saveObservations(index) {
    establishments[index].observacoes = document.getElementById('observationsText').value;
    saveToLocalStorage();
    closeDetailsModal();
}

function closeDetailsModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

// =================================================================================
// LÓGICA DE FILTRAGEM E BUSCA
// =================================================================================
function applyFilters() {
    const typeValue = document.getElementById('typeFilter').value;
    const neighborhoodValue = document.getElementById('neighborhoodFilter').value;
    const statusValue = document.getElementById('statusFilter').value;
    const etapaValue = document.getElementById('etapaFilter').value;
    const sortValue = document.getElementById('sortBy').value;
    
    let filteredData = [...establishments]; 
    
    if (typeValue !== 'all') filteredData = filteredData.filter(e => e.type === typeValue);
    if (neighborhoodValue !== 'all') filteredData = filteredData.filter(e => e.neighborhood === neighborhoodValue);
    if (statusValue !== 'all') {
        if (statusValue === 'sem-status') filteredData = filteredData.filter(e => !e.status || e.status === '');
        else filteredData = filteredData.filter(e => e.status === statusValue);
    }
    if (etapaValue !== 'all') filteredData = filteredData.filter(e => e.etapas[etapaValue] === true);
    
    if (sortValue === 'name') filteredData.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortValue === 'type') filteredData.sort((a, b) => a.type.localeCompare(b.type));
    else if (sortValue === 'neighborhood') filteredData.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood));
    else if (sortValue === 'status') {
        const statusOrder = { 'quente': 1, 'morno': 2, 'frio': 3, '': 4 };
        filteredData.sort((a, b) => (statusOrder[a.status] || 4) - (statusOrder[b.status] || 4));
    }
    
    populateTable(filteredData);
}

function resetFilters() {
    document.getElementById('typeFilter').value = 'all';
    document.getElementById('neighborhoodFilter').value = 'all';
    document.getElementById('statusFilter').value = 'all';
    document.getElementById('etapaFilter').value = 'all';
    document.getElementById('sortBy').value = 'name';
    document.getElementById('searchInput').value = '';
    populateTable(establishments);
}

function searchEstablishments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim() === '') {
        applyFilters(); 
        return;
    }
    
    const filteredData = establishments.filter(e => 
        e.name.toLowerCase().includes(searchTerm) ||
        e.type.toLowerCase().includes(searchTerm) ||
        e.neighborhood.toLowerCase().includes(searchTerm) ||
        e.address.toLowerCase().includes(searchTerm)
    );
    
    populateTable(filteredData);
}