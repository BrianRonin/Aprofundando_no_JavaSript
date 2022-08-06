function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 0;
const max = 11;

let rand = random(min, max);

//while é usuda diferente do for pra coisas que agente não sabe
//exatamente quando vai terminar
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("#### DO WHILE ####");
// A diferença do "do while" para "while"
// é que o 'do' executa o codigo primeiro só então verifica

rand = 10;

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
