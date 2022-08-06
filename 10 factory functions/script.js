function criarPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // getter Agora ele não é conhecido como função embora
    // seja uma função
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando sobre nada") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criarPessoa("luiz", "Otavio", 1.8, 80);
const p2 = criarPessoa("Brian", "Matias", 1.85, 85);
p1.nomeCompleto = "palhaço marcos tiririca";

console.log(p1.nomeCompleto);
// console.log(p2.fala("falando sobre JS"));
// console.log(p2.imc());
