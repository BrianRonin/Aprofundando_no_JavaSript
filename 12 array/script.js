/////////////// SPLICE,  UNSHIFT, PUSH, SHIFT, POP ///
//               -5        -4      -3        -2       -1
//                0         1       2         3        4
const nomes = ["brian", "bianca", "joão", "gustavo", "nira"];

// nomes.splice(índice, quantidade de delete, adicionar elementos el1, el2, etc )

// .Unshift('el') adciona el no começo
nomes.splice(0, 0, "tiririca");
// .Push('el') adciona el no final
nomes.splice(-1, 0, "tiririca");

// .Shift('el') remove o primeiro el
const removidosShift = nomes.splice(0, 1, "tiririca");
// .pop remove o ultimo el
const removidosPop = nomes.splice(-1, 1);
// A variavel removidos contem os elementos removidos

//////////////// .replace() /////// Muito util tambem  ///////////////////////////////
///.replace serve pra tirar algo da string ou array
//let cpfLimpo = cpf.replace("oque quer remover", ""); // <-oque quer substituir
///////////////    .split()    Array.from(string)   ////////////////////////////////////////////////////////////
//.split usa pra passar uma string pra array usando como
// argumento o separador
//Array.from(strimg) tambem funciona
/**
 * .slice corta o array tambem
 */
/////////////// CONCATENANDO ARRAYS COM /// OBS: funciona com obj ////
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log("#### SPREAD ####");
const a4 = [...a1, "joão", ...a2, ...[7, 8, 9]];
console.log(a4);
console.log("#### CONCAT ####");
const a3 = a1.concat(a2, ["adicionar", "array"], "adicionar elemento");
console.log(a3);

/////////////// Filter, Map, Reduce ////////////////////////////////////////////////////////////////////////////
/// FILTER Cria um novo valor com o valor filtrado
console.log("#### FILTER COM ARRAY ####");
const numeros = [6, 21, 6, 34, 50, 56];
const numerosMaiorQue10 = numeros.filter(function (valor, indice, array) {
  return valor >= 50;
});
console.log(numerosMaiorQue10);

console.log("#### FILTER COM OBJ ####");

let pessoas = [
  { nome: "Brian", idade: 21 },
  { nome: "João", idade: 41 },
  { nome: "Leticia", idade: 60 },
  { nome: "maria", idade: 6 },
  { nome: "Bianca", idade: 55 },
];
const pessoasComMaisDe50Anos = pessoas.filter(function (valor, indice, array) {
  return valor.idade >= 50;
});
console.log(pessoasComMaisDe50Anos);
/// MAP faz a alteração com todos valor /////////////////////////////////////////////////////////////////
console.log("#### MAP COM ARRAY ####");
const numeros2 = [6, 21, 6, 34, 50, 56];
const numerosEmDobro = numeros.map(function (valor, indice, array) {
  return valor * 2;
});
console.log(numerosEmDobro);

console.log("#### MAP COM OBJ ####");

// const pessoas = [
//   { nome: "Brian", idade: 21 },
//   { nome: "João", idade: 41 },
//   { nome: "Leticia", idade: 60 },
//   { nome: "maria", idade: 6 },
//   { nome: "Bianca", idade: 55 },
// ];
const pessoasDaqui10Anos = pessoas.map(function (valor, indice, array) {
  const newOBj = { ...valor };
  newOBj.idadeDaqui10Anos = newOBj.idade * 2;
  newOBj.id = indice;
  return newOBj;
});
console.log(pessoasDaqui10Anos);

/// REDUCE
console.log("#### REDUCE COM ARRAY ####");

const numeros3 = [6, 21, 6, 34, 50, 56];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); // <--- valor inicial// se não mandar nada o acumulador
// é o primeiro elemento e o valor é o segundo elemento
console.log(total);
console.log("#### REDUCE COM OBJ ####");
// pessoas = [
//   { nome: "Brian", idade: 21 },
//   { nome: "João", idade: 41 },
//   { nome: "Leticia", idade: 60 },
//   { nome: "maria", idade: 6 },
//   { nome: "Bianca", idade: 55 },
// ];
const pessoaMaisVelha = pessoas.reduce(function (
  acumulador,
  valor,
  indice,
  array
) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor; // Quando retorna o valor ele passa a ser o acumulador
});
console.log(pessoaMaisVelha);
////////// EX ////// filter + map + reduce ////
// filtrar pares, dobrar valores, somar valores
console.log("### EX ###");
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const resultado = numeros4
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));
console.log(resultado);

///////////////// forEach ////////////////////

const b1 = [10, 20, 30];
let Total = 0;

b1.forEach((valor) => {
  total += valor;
});

console.log(total);
