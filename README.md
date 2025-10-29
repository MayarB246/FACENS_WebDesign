# Vuelo - Sistema de Prospecção de Leads
## Projeto para a disciplina de Web Design - Engenharia da Computação (FACENS)

![Badge do Projeto](https://img.shields.io/badge/Projeto-FACENS%20Web%20Design-9370DB)

🔗 Acesse o projeto online: [https://facens-web-design.vercel.app/](https://facens-web-design.vercel.app/)

Este projeto foi desenvolvido como parte da disciplina de Web Design do curso de Engenharia da Computação da FACENS. Ele representa uma aplicação web completa, com foco em front-end, chamada **Vuelo**. O objetivo principal do sistema é permitir a prospecção, organização e acompanhamento de leads — ou seja, potenciais clientes ou estabelecimentos que podem ser contatados para fins comerciais.

A interface foi cuidadosamente desenhada para ser intuitiva, responsiva e funcional, permitindo que o usuário navegue com facilidade entre as páginas, cadastre novos leads, visualize métricas e acompanhe o progresso de contato com cada estabelecimento. O sistema simula uma experiência real de CRM (Customer Relationship Management), mas com foco educacional e sem backend.

---

## ✨ Funcionalidades Detalhadas

### 🔐 Autenticação de Usuários
- Sistema completo de **Login** e **Cadastro**, com validação de campos.
- Armazenamento dos dados no `localStorage`, simulando sessões persistentes.
- Feedback visual para erros de preenchimento e sucesso na autenticação.
- Interface amigável com campos bem espaçados e botões grandes para toque.

### 📊 Dashboard Interativo
- Cards com estatísticas rápidas: total de leads, leads por status, leads por tipo.
- Gráficos de pizza e rosca com **Chart.js**, atualizados dinamicamente.
- Responsividade total: os gráficos se adaptam a qualquer tamanho de tela.
- Cores distintas para cada categoria, facilitando a leitura visual.

### 📋 Gerenciamento de Leads
- Tabela com todos os leads cadastrados, organizada por colunas.
- Ciclo de status com transições simples e visuais: Sem Status → Frio → Morno → Quente.
- Marcação de etapas de contato: 1º, 2º e 3º contato.
- Modal de detalhes com informações completas e campo para observações.

### 🔎 Filtros e Busca
- Filtros por tipo de estabelecimento, bairro, status e etapa de contato.
- Ordenação por nome, tipo, bairro ou status.
- Campo de busca rápida com suporte a múltiplos critérios.
- Resultados atualizados em tempo real conforme o usuário digita.

### 💾 Persistência de Dados
- Todas as alterações são salvas automaticamente no `localStorage`.
- Nenhuma informação é perdida ao recarregar a página.
- Simulação de banco de dados local para fins educacionais.

### 📱 Design Responsivo
- Layout adaptável para desktops, tablets e celulares.
- Tipografia legível com fonte Montserrat.
- Botões e campos otimizados para toque.
- Colunas e seções reorganizadas em telas menores.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas e amplamente utilizadas no desenvolvimento web:

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilização com Flexbox, Grid, media queries e variáveis.
- **JavaScript (ES6+)**: Manipulação do DOM, lógica de negócio e interatividade.

### Bibliotecas e Recursos Externos
- **Chart.js**: Gráficos interativos e responsivos.
- **Font Awesome**: Ícones visuais para navegação e feedback.
- **Google Fonts (Montserrat)**: Tipografia moderna e legível.
- **Vercel**: Hospedagem gratuita e rápida para projetos front-end.

---

## 🛠️ Como Executar o Projeto

Este é um projeto puramente front-end, o que significa que não requer servidor, banco de dados ou compilação. Basta abrir os arquivos HTML em um navegador moderno.

1. **Clone ou baixe este repositório:**
    ```bash
    git clone https://github.com/henriqueavilab/WD-SITE
    ```
2. **Navegue até a pasta do projeto:**
    ```bash
    cd FACENS_WebDesign
    ```
3. **Abra o arquivo `Index.html`:**
    - Clique duas vezes no arquivo.
    - Ele será aberto diretamente no navegador padrão.

✅ Ou acesse diretamente: [https://facens-web-design.vercel.app/](https://facens-web-design.vercel.app/)

---

## 🧠 Observações Adicionais

- O projeto foi testado em navegadores como Chrome, Firefox e Edge.
- O layout se mantém funcional mesmo em resoluções abaixo de 400px.
- O uso de `localStorage` permite simular persistência sem backend.
- O código está comentado para facilitar o entendimento por outros alunos.
- O sistema pode ser expandido para incluir autenticação real e banco de dados.

## 📄 Estrutura das Páginas do Projeto

O sistema Vuelo é composto por diversas páginas, cada uma com foco específico e funcionalidades distintas:

### 🔹 Página de Ajuda (`ajuda/ajuda.html`)
- Página de suporte com **FAQ**, **informações de contato** e links úteis.
- Conteúdo dividido em seções claras, com títulos e subtítulos.
- Links externos abrem em nova aba para evitar perda de contexto.
- Layout otimizado para leitura em dispositivos móveis.
- Mantém o footer padrão com navegação, contatos e redes sociais.

### 🔹 Página de Cadastro (`cadastro/cadastro.html`)
- Formulário para **adicionar novos estabelecimentos**.
- Campos: nome, tipo, bairro, endereço, telefone e observações.
- Validação básica no front-end com mensagens de erro e sucesso.
- Inputs e botões dimensionados para uso por toque.
- Integração com `localStorage` para persistência de dados.

### 🔹 Página de Dados / Dashboard
- Página dedicada à **visualização de métricas** e gráficos.
- Gráficos com **Chart.js**: pizza, rosca e barras.
- Filtros e controles adaptados para dispositivos touch.
- Cards com estatísticas rápidas e cores distintas.
- Layout responsivo com reorganização de elementos.

### 🔹 Página de Funcionalidades (`func/funcionalidades.html`)
- Utilitários diversos: **zoom da página**, **calculadora**, **relógio digital**, **copiar texto**, **validação de configurações**.
- Cada bloco é compacto e acessível em telas pequenas.
- Botões grandes com feedback visual.
- Botão **"Voltar ao Topo"** incluído para facilitar navegação.
- Mantém o mesmo footer das demais páginas.

---

## 📱 Footer e Responsividade

### 🧩 Estrutura do Footer
- Seções organizadas: **Institucional**, **Contato**, **Links Úteis**, **Redes Sociais**.
- Rodapé inferior com aviso de **direitos autorais**.
- Ícones via **Font Awesome** para melhor reconhecimento visual.
- Links internos e externos bem distribuídos.

### ✅ Boas Práticas Aplicadas
- Layout com **Flexbox/Grid** para reorganização automática.
- Tipografia e espaçamento responsivos com unidades `rem/em`.
- Links e botões com áreas de clique/touch adequadas.
- Botão **"Voltar ao Topo"** melhora a navegação em páginas longas.
- Testes de acessibilidade realizados com teclado e toque.

### 🧪 Testes Recomendados
- Reduzir a largura do navegador para verificar reflow e legibilidade.
- Testar navegação e links em dispositivos touch.
- Verificar comportamento dos gráficos ao rotacionar tela.
- Simular uso em tablets e celulares com diferentes resoluções.

---

## 📞 Informações de Contato

- 📍 Sorocaba - SP, Brasil  
- 📧 contato@vuelo.com.br  
- 📱 (15) 3238-1234  

### 🌐 Links Úteis
- [Início](https://facens-web-design.vercel.app/index.html)  
- [Funcionalidades](https://facens-web-design.vercel.app/func/funcionalidades.html)  
- [Sobre](https://facens-web-design.vercel.app/sobre/sobre.html)  
- [Cadastro](https://facens-web-design.vercel.app/cadastro/cadastro.html)  
- [Ajuda](https://facens-web-design.vercel.app/ajuda/ajuda.html)  

### 📲 Redes Sociais
- [Instagram](https://www.instagram.com/)  
- [LinkedIn](https://www.linkedin.com/)  
- [GitHub](https://github.com/MayarB246/FACENS_WebDesign)  

© 2025 Vuelo. Todos os direitos reservados.

---

## 🧾 Considerações Finais

Este projeto é uma excelente base para estudos de front-end, podendo ser expandido com backend, autenticação real, banco de dados e integração com APIs externas. A estrutura modular facilita a manutenção e evolução do sistema. O uso de boas práticas de responsividade