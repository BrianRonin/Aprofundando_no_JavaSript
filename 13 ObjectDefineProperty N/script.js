// defineProperty - defineProperties

//Define propertiy ou Definir propriedade serve pra
//Criar um OBJ mas definir as propriedades do obj
//Inves de apenas criar como uma variavel

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //         aonde vai criar,'nome da chave',{ Propriedades do OBJ }
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Visivel a chave?
    value: estoque, // Valor da chave do OBJ
    writable: true, // Pode alterar o valor?
    configurable: true, // Pode ser reconfigurado?
  });

  // com properties é a mesma coisa como o nome ja diz
  // a diferença é que configura mais OBJ
  Object.defineProperties(this, {
    id: {
      enumerable: true, // Visivel a chave?
      value: 4, // Valor do OBJ
      writable: true, // Pode alterar o valor?
      configurable: true, // Pode ser reconfigurado?
    },
    cor: {
      enumerable: true, // Visivel a chave?
      value: "red", // Valor do OBJ
      writable: true, // Pode alterar o valor?
      configurable: true, // Pode ser reconfigurado?
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
