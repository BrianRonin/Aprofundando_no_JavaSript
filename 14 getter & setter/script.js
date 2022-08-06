// Com Constructor functions
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let tempEstoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return tempEstoque;
    },
    set: function (valor) {
      if (typeof valor === "number") {
        tempEstoque = valor;
      } else {
        console.log("Deve ser um numero");
      }
    },
  });
}
const p1 = new Produto("tenis", 40, 3);

console.log(p1);

p1.estoque = 10;

console.log(p1.estoque);

// Com factory functions da pra colocar no proprio objeto

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}
console.log("### com factory functions ###");
const p2 = criaProduto("camiseta");
console.log(p2);
p2.nome = "Luvas";
console.log(p2.nome);
