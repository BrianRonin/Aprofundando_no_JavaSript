function a(evtt) {
  var form = document.querySelector("#form");

  evtt.preventDefault();

  var ct = $("#container");
  var re = document.getElementById("re");
  console.log(re);
  var nome = $("#nome").val();
  var Sobrenome = $("#Sobrenome").val();
  var Peso = $("#Peso").val();
  var Altura = $("#Altura").val();

  var rNome = document.getElementById("rNome");
  var rSobrenome = document.getElementById("rSobrenome");
  var rPeso = document.getElementById("rPeso");
  var rAltura = document.getElementById("rAltura");

  // Pessoas = []

  // Pessoas.push({
  //    nome: nome,
  //    sobrenome: Sobrenome,
  //    peso: Peso,
  //    altura: Altura
  // })

  re.innerHTML += `<br><hr><p>Nome: <span>${nome}</span></p>`;
  re.innerHTML += `<p>Sobrenome: <span>${Sobrenome}</span></p>`;
  re.innerHTML += `<p>Peso: <span>${Peso}</span></p>`;
  re.innerHTML += `<p>Altura: <span>${Altura}</span></p><br><hr>`;

  // }
}

form.addEventListener("submit", a);

console.log(Peso);
