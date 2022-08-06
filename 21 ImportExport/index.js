import diminuidor, {
  nome as seiLa,
  sobrenome2,
  idade,
  Pessoa,
  soma,
} from "./modulo1.js";
import * as all from "./all";
console.log(seiLa, sobrenome2, idade);

const p1 = new Pessoa("Luiz", "Otavio");
console.log(p1);
console.log(soma(5, 5));
console.log(all.vezes(2, 2));
console.log(diminuidor(10, 2));
