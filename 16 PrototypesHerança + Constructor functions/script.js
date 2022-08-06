console.log("######### Conhecendo Prototype ##########");
// Todo objeto tem um Prototype/protótipo //
// Quando voce cria um Constructor Function o JS ja linka
// Automaticamente o Prototype do constroctor com todo
// Objeto criado do constroctor
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  /**
   * Se eu criar uma função aqui com
   * this."MesmoNomeDoPrototype"
   * Vai executar primeiro esse this
   * pois o JS procura primeiro no Objeto
   * Antes de procurar no prototipo do Objeto 
   this.nomeCompleto = () => {
   return `OLA ${nome} ${sobrenome}`;
   };
   * /// Cadeia de procura /// Pai de todos Objetos ///
   * Objeto -> Objeto.prototype -> Object.prototype
   * 
   *  Pessoa.prototype === Pessoa._proto_
   *  É a mesma coisa
   */
}
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const pessoa1 = new Pessoa("Luiz", "henrique", "20");
const pessoa2 = new Pessoa("Brian", "matias", "21");
console.log(pessoa1.nomeCompleto());

console.log("######### Manipulando Prototypes ##########");

// new Object -> Object.prototype
const objA = {
  chaveA: "A",
  // _proto_: Object.prototype
};

const objB = {
  chaveA: "A",
  // _proto_: objA
};

const objC = new Object();
objC.chaveC = "C";

// Eu posso definir o prototype de um objeto
// como outro objeto assim, porem ele acaba herdando
// tambem junto com o prototype, o constructor definido
// como o prototype herdado, podendo acessar assim
// o proprio objeto herdado
//
//                  objB = objA
Object.setPrototypeOf(objB, objA);
//                  objC = objB
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(objA.chaveC);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("camiseta", 50);
p1.desconto(50);
console.log(p1);

/**                                                                 *****
 * Outra forma de criar um objeto ja definindo o prototipo              *OBS: podendo gerar o object.prototype
 * e até mesmo a propriedade do objeto igual o ObjectDefineProperty     *como padrão podendo assim criar um objeto normal
 */
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 70,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 50,
  },
});
p3.desconto(50);
console.log(p3);
console.log("######### Heranças ##########");
// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

// toda função vem com um atributo que se chama call;
// nessa call voce pode fazer a mesma coisa que o new Produto faz
/**
 * nela voce tem que passar como primeiro argumento quem vai ser
 * o this, e nos proximos argumentos, vai como argumento normal
 * como se fosse criar um new.
 * no caso estou linkando o mesmo
 * argumento da camiseta preco e nome com o Produto
 */
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
/**
 * Porem toda função construtora tem seu proprio prototype
 * então alem do call pra linkar os valores teria que criar
 * um prototype novo pegando como base o pai sendo assim uma
 * classe de produtos, camiseta.
 * Mas fazendo isso o prototype do constructo function
 * Camiseta que é uma classe de produtos, perderia seu
 * 'constructor' assim o java script consideraria o
 * 'Produto' como constructor então pra resolver isso
 * daria simplesmente definindo denovo o constructor
 * logo apos definir o prototype
 */

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
const camiseta1 = new Camiseta("regata", 60, "red");

console.log(camiseta1);
console.dir(Produto);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: () => estoque,
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const canecaDoHomemAranha = new Caneca(
  "Caneca do homem aranha",
  20,
  "porcelanato",
  10
);

canecaDoHomemAranha.desconto(40);
console.log(canecaDoHomemAranha);

/**
 * ////////////////////////////// MESMA COISA MAS PARA O FACTORY FUNCTIONS //////////////////////////////////////
 */ //Prototype com factory function é um pouco mais solto podendo usar o mesmo metodo em varios objetos
console.log("## PROTOTYPE COM FACTORY FUNCTIONS ###");

const nomeCompleto = {
  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};
const morreu = {
  morreu() {
    console.log(`${this.nome} MORREU!`);
  },
};

function criaPessoa(nome, sobrenome) {
  //criando prototype, apenas criando um objeto e reatribuindo no retorno
  //do objeto, voce pode usar assign se quiser atribuir mais objetos no prototype
  const pessoaPrototye = Object.assign(
    {
      comer() {
        console.log(`${this.nome} esta comendo`);
      },
      beber() {
        console.log(`${this.nome} esta bebendo`);
      },
      falar() {
        console.log(`${this.nome} esta falando`);
      },
    },
    morreu,
    nomeCompleto
  );

  // pessoaPrototye = {
  //   comer() {
  //     console.log(`${this.nome} esta comendo`);
  //   },
  //   beber() {
  //     console.log(`${this.nome} esta bebendo`);
  //   },
  //   falar() {
  //     console.log(`${this.nome} esta falando`);
  //   },
  // };

  return Object.create(pessoaPrototye, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const pessoaUm = criaPessoa("Brian", "Matias");
console.log(pessoaUm);
console.log(pessoaUm.comer());
console.log(pessoaUm.morreu());
