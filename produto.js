// Dados dos produtos e suas variações
const produtos = {
  cadeira1: {
    nome: "Cadeira 1",
    desc: "Veja todas as opções da Cadeira 1.",
    variacoes: [
      { img: "heyheyehy.jpg", titulo: "Modelo A", texto: "Versão com estofado cinza." },
      { img: "heyheyehy2.jpg", titulo: "Modelo B", texto: "Versão em couro preto." },
      { img: "heyheyehy3.jpg", titulo: "Modelo C", texto: "Modelo com apoio de braço." }
    ]
  },
  cadeira2: {
    nome: "Cadeira 2",
    desc: "Veja todas as opções da Cadeira 2.",
    variacoes: [
      { img: "heyheyehy.jpg", titulo: "Escritório", texto: "Perfeita para home office." },
      { img: "heyheyehy2.jpg", titulo: "Luxo", texto: "Design sofisticado." }
    ]
  },
  carpete1: {
    nome: "Carpete 1",
    desc: "Opções do Carpete 1.",
    variacoes: [
      { img: "heyheyehy.jpg", titulo: "Bege", texto: "Elegante e versátil." },
      { img: "heyheyehy2.jpg", titulo: "Cinza", texto: "Combina com qualquer ambiente." }
    ]
  }
};

// Pega ID da URL (?id=cadeira1)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (produtos[id]) {
  const produto = produtos[id];
  const bannerImg = document.getElementById("banner-img");
  const produtoNome = document.getElementById("produto-nome");
  const produtoDesc = document.getElementById("produto-desc");
  const variacoesDiv = document.getElementById("variacoes");

  // Atualiza banner
  bannerImg.src = produto.variacoes[0].img;

  produtoNome.textContent = produto.nome;
  produtoDesc.textContent = produto.desc;

  // Cria cards de variações
  produto.variacoes.forEach((v, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${v.img}" alt="${v.titulo}">
      <h3>${v.titulo}</h3>
      <p>${v.texto}</p>
    `;

    // Ao clicar no card, atualiza o banner
    card.addEventListener("click", () => {
      bannerImg.src = v.img;
    });

    variacoesDiv.appendChild(card);
  });
}
