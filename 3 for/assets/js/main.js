const elementos = [
  { tag: "h1", texto: "Qualquer texto que voce quiser." },
  { tag: "h2", texto: "Qualquer texto que voce quiser." },
  { tag: "h3", texto: "Qualquer texto que voce quiser." },
  { tag: "div", texto: "Qualquer texto que voce quiser." },
];

console.log(elementos);

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
