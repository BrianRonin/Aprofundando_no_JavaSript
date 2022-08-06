// Escreve a função que recebe um numero e
// retorba o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 3 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Numero nao é divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero e realmente um numero
// use a funcao com numeros de 0 a 100

function SeiLa(n) {
  var dv3 = n / 3;
  var dv5 = n / 5;

  if (n > 100 || n < 0 || isNaN(n)) {
    return console.log("Tem que ser numero e entre 0 - 100");
  } else if (Number.isInteger(dv3) & Number.isInteger(dv5)) {
    return console.log("FizzBuzz");
  } else if (Number.isInteger(dv3)) {
    return console.log("Fizz");
  } else if (Number.isInteger(dv5)) {
    return console.log("Buzz");
  } else {
    return n;
  }
}

SeiLa("6");

function fizzBuzz(num) {
  if (isNaN(num) || num > 100 || num < 0)
    return "Tem que ser numero e entre 0 - 100";
  if ((num % 3 === 0) & (num % 5 === 0)) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, typeof i, fizzBuzz(i));
}
