const cardContainer = document.querySelector(".card-container");
const caixaBusca = document.querySelector("#caixa-busca"); // Adiciona referência ao campo de busca
const botaoBusca = document.querySelector("#botao-busca"); // Adiciona referência ao botão
const themeToggleButton = document.querySelector("#theme-toggle");
let dados = [];

async function pesquisar() {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
    }
}

function renderizarCards(listaDeDados) {
    cardContainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards
    if (listaDeDados.length === 0) {
        // Se a busca foi feita (caixa de busca não está vazia) e não há resultados, mostra a mensagem.
        if (caixaBusca.value.trim() !== "") {
            cardContainer.innerHTML = "<p>Nenhum resultado encontrado para sua busca.</p>";
        }
        return;
    }
    for (const dado of listaDeDados) {
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
            <p>${dado.descricao}</p>
        `;
        cardContainer.appendChild(article);
    }
}

function executarBusca() {
    const termoBusca = caixaBusca.value.toLowerCase().trim();

    if (termoBusca === "") {
        renderizarCards([]); // Chama com array vazio para limpar a tela
        return;
    }

    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(dadosFiltrados);
}

// Adiciona um "escutador de eventos" para o clique no botão
botaoBusca.addEventListener("click", executarBusca);

// --- Lógica para alternar o tema ---
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva a preferência do tema no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "☀️"; // Sol para modo escuro
    } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙"; // Lua para modo claro
    }
});

// Verifica a preferência de tema ao carregar a página
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️";
}

// Chama a função para buscar os dados quando o script for carregado
pesquisar();