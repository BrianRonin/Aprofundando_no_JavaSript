const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("pulei o numero 2");
    continue; // 'continue' pula pro proxima ação
    // não executando o codigo abaixo
  }

  console.log(numero);

  if (numero === 5) {
    console.log("numero 5 encontrado");
    break; // break para totalmente o codigo do escopo
  }
}
