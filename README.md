# Base de Conhecimento - Patologias Orais

![Licença](https://img.shields.io/badge/licença-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um guia de referência rápido e interativo para estudantes e profissionais de Odontologia, focado em patologias orais. Este projeto permite pesquisar e visualizar informações essenciais sobre diversas doenças da cavidade bucal de forma simples e eficiente.

---

---

## ✨ Funcionalidades

- **Busca Dinâmica**: Pesquise por nome ou termos na descrição das patologias.
- **Cards Informativos**: Os resultados são exibidos em cards, cada um contendo:
  - Definição da doença.
  - Causa.
  - Tratamento.
  - Medidas preventivas.
  - Link para informações mais detalhadas.
- **Tema Claro e Escuro**: Alterne entre os modos de visualização para maior conforto visual. A preferência é salva localmente no navegador.
- **Design Responsivo**: Interface adaptável para uso em desktops, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web padrão:

- **HTML5**: Para a estrutura semântica do conteúdo.
- **CSS3**: Para a estilização, layout (Flexbox e Grid) e temas.
- **JavaScript (ES6+)**: Para toda a lógica de interatividade, incluindo:
  - Requisição de dados do arquivo `data.json` com `fetch API`.
  - Lógica de busca e filtragem.
  - Renderização dinâmica dos componentes.
  - Funcionalidade de alternância de tema.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Abra o arquivo `index.html`:**
    A maneira mais recomendada é usar um servidor local para evitar problemas com a política de CORS do navegador ao carregar o arquivo `data.json`.

    - **Usando a extensão Live Server no VS Code:**
      - Instale a extensão Live Server.
      - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

    - **Sem um servidor local:**
      - Você pode abrir o arquivo `index.html` diretamente no seu navegador, mas a busca pode não funcionar em alguns navegadores devido a restrições de segurança.

---

## 📂 Estrutura do Projeto

```
BASE-DE-CONHECIMENTO/
├── 📄 index.html      # Estrutura principal da página
├── 🎨 style.css       # Estilos visuais e temas (claro/escuro)
├── ⚙️ script.js       # Lógica da aplicação (busca, renderização, tema)
└── 📦 data.json       # Banco de dados com as informações das patologias
```

---

## 👨‍💻 Autor

Projeto desenvolvido por **Josué Solota**.

[!O meu projecto](https://josuesolota.github.io/imersao-dev-10/)
[!LinkedIn](https://www.linkedin.com/in/josue-solota)
[!GitHub](https://github.com/Josuesolota)

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
