// Escreva uma função que recebe 2 números e
// retorna o maior deles

function qualEMaior(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    return console.log("os dois numeros tem o mesmo valor");
  }
}

const max = (x, y) => (y > x ? y : x);

console.log(max(4, 1));

// Escreva uma função que descreve se o argumento altura e largura de uma imagem esta paisagem

const ePaisagem = (altura, largura) =>
  altura > largura
    ? console.log("sua imagem esta em retrato")
    : console.log("sua imagem esta em paisagem");

console.log(ePaisagem(500, 10));
