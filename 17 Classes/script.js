console.log("#### CLASS ######################");
/**
 * class é bem parecido com constructor function
 * voce cria ela assim:
 * usa o "constructor" pra inserir os argumentos
 * e pra facilitar os metodos que inserir no class
 * ja vai automaticamente pro prototype da class
 */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando`);
  }
  comer() {
    console.log(`${this.nome} esta comendo`);
  }
  beber() {
    console.log(`${this.nome} esta bebendo`);
  }
}

const p1 = new Pessoa("Brian", "Cristiano");
console.log(p1.comer());

////////////////////// GETTER E SETTER + Symbol /////////////////////
console.log("#### GETTER & SETTER + SYMBOL #########################");
/**
 * Symbol é mais um dado primitivo que
 * melhora o desempenho, e elimina a possibilidade de conflito
 * sendo unico, cada symbol é unico, e pode ser usado com
 * getter e setter pra aprimorar ainda mais
 */ console.log(Symbol() === Symbol());

//DESCRICAO APENAS
const velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this[velocidade] = 0;
    this.nome = nome;
  }
  get velocidade() {
    return this[velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor > 100 || valor < 0) return;
    this[velocidade] = valor;
  }
  acelerar() {
    if (this[velocidade] >= 100) return;
    this[velocidade]++;
  }

  freiar() {
    if (this[velocidade] <= 0) return;
    this[velocidade]--;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i < 200; i++) {
  c1.acelerar();
}

console.log(c1);

c1.velocidade = 40;
console.log(c1.velocidade);

////////////////////// HERANÇA ////////////////////////
console.log("#### HERANÇA ##########################");

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      return console.log(this.nome + " ja ligado");
    }
    console.log(this.nome + " ligado");
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      return console.log(this.nome + " ja desligado");
    }
    console.log(this.nome + " desligado");
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
console.log(d1);

/**
 * Pra criar uma herança/sub_classe com class, voce cria assim
 * Porem pra linkar o prototype igual no constructor function que usa call()
 * aqui vai usar super(argumentos pai) posso fazer esse extends eu quero
 * mas, mais especifico e complicado fica o codigo, faz no maximo umas 3
 * pra achar um bug fica mais complicado fragil pra alterar a cadeia
 */
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}

const smartphone1 = new Smartphone("iphone", "preto", "iphoneXL");
smartphone1.ligar();
console.log(smartphone1);

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  // tambem posso alterar o ligar pai por exemplo
  ligar() {
    console.log("alterado");
  }
}

tablet1 = new Tablet("iPad", true);
tablet1.ligar();

//////////////////// METODOS DE ISTANCIA E ESTATICOS ////////////////////////
console.log(
  "#### METODOS DE ISTANCIA E ESTATICOS ###################################"
);
/**
 * Metodo de instancia é aquele metodo compartilhado
 * pelo prototype que todos objeto criado podem acessar
 * pra criar um metodo estatico no class voce usa "static"
 * ai esse metodo sera estatico apenas no pai isso significa
 * que vai se tornar apenas uma função normal que seu this
 * vai se tornar a propria função não tera acesso aos dados das
 * istancias voce pode querer isso apenas por organização pra
 * não colocar a função no escopo global
 */

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  aumentarVolume() {
    // Metodo de instancia normal
    this.volume += 2;
  }
  diminuirVolume() {
    // Metodo de instancia normal
    this.volume -= 2;
  }

  static trocaPilha() {
    // Metodo estatico
    console.log(this.volume);
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
