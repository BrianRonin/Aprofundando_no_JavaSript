const nome = "brian";
const sobrenome = "Cristiano";
const idade = "20";
function soma(x, y) {
  return x + y;
}
// posso definir o default pelo 'as' tambem
export default function sub(x, y) {
  return x - y;
}

export { nome, sobrenome as sobrenome2, idade, soma };

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
