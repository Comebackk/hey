// Produtos e suas variações
const produtos = {
  cadeira1: {
    nome: "Cadeira 1",
    desc: "Veja todas as opções da Cadeira 1.",
    variacoes: [
      { img: "heyheyehy.jpg", titulo: "Cadeira 1 - Modelo A", texto: "Versão com estofado cinza." },
      { img: "heyheyehy.jpg", titulo: "Cadeira 1 - Modelo B", texto: "Versão em couro preto." },
      { img: "heyheyehy.jpg", titulo: "Cadeira 1 - Modelo C", texto: "Modelo com apoio de braço." }
    ]
  },
  cadeira2: {
    nome: "Cadeira 2",
    desc: "Veja todas as opções da Cadeira 2.",
    variacoes: [
      { img: "heyheyehy.jpg", titulo: "Cadeira 2 - Escritório", texto: "Perfeita para home office." },
      { img: "heyheyehy.jpg", titulo: "Cadeira 2 - Luxo", texto: "Design sofisticado." }
    ]
  },
  carpete1: {
    nome: "Carpete 1",
    desc: "Opções do Carpete 1.",
    variacoes: [
      { img: "carpete1-opcao1.jpg", titulo: "Carpete 1 - Bege", texto: "Elegante e versátil." },
      { img: "carpete1-opcao2.jpg", titulo: "Carpete 1 - Cinza", texto: "Combina com qualquer ambiente." }
    ]
  },
  carpete2: {
    nome: "Carpete 2",
    desc: "Opções do Carpete 2.",
    variacoes: [
      { img: "carpete2-opcao1.jpg", titulo: "Carpete 2 - Clássico", texto: "Durável e resistente." },
      { img: "carpete2-opcao2.jpg", titulo: "Carpete 2 - Premium", texto: "Acabamento de alto padrão." }
    ]
  }
};

// Pega ID da URL (ex: ?id=cadeira1)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (produtos[id]) {
  const produto = produtos[id];

  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-desc").textContent = produto.desc;

  const variacoesDiv = document.getElementById("variacoes");

  produto.variacoes.forEach(v => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${v.img}" alt="${v.titulo}">
      <h3>${v.titulo}</h3>
      <p>${v.texto}</p>
    `;
    variacoesDiv.appendChild(card);
  });
}
