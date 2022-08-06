// função normal
function func1(valor1, valor2) {
  return valor1 + valor2;
}

console.log(func1(1, 2));
// curried function
function func2(valor1) {
  return function (valor2) {
    return valor1 + valor2;
  };
}

const func2Valor1 = func2(10);
console.log("curried", func2Valor1(20));
console.log("curried2", func2(5)(5));

const funcArrow = (valor1) => (valor2) => (valor3) => {
  return valor1 + valor2 + valor3;
};

console.log("ArrowCurrie", funcArrow(5)(5)(5));
