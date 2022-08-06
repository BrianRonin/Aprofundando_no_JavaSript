// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//   const dia = zeroAEsquerda(data.getDate());
//   const ano = zeroAEsquerda(data.getFullYear());
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());
//   const seg = zeroAEsquerda(data.getSeconds());

//   return `${diaDaSemana(data)}, ${dia} de ${mes(
//     data
//   )} de ${ano} ${hora}:${min}:${seg}`;
// }

// diaDaSemana = function (data) {
//   let diaSemana = data.getDay();

//   switch (diaSemana) {
//     case 0:
//       diaSemana = "Domingo";
//       return diaSemana;
//     case 1:
//       diaSemana = "Segunda";
//       return diaSemana;
//     case 2:
//       diaSemana = "Terça";
//       return diaSemana;
//     case 3:
//       diaSemana = "Quarta";
//       return diaSemana;
//     case 4:
//       diaSemana = "Quinta";
//       return diaSemana;
//     case 5:
//       diaSemana = "Sexta";
//       return diaSemana;
//     case 6:
//       diaSemana = "Sabado";
//       return diaSemana;
//     default:
//       diaSemana = "err";
//       return diaSemana;
//   }
// };

// mes = function (data) {
//   let mes = data.getMonth();
//   console.log(mes);

//   switch (mes) {
//     case 0:
//       mes = "Janeiro";
//       return mes;
//     case 1:
//       mes = "Fevereiro";
//       return mes;
//     case 2:
//       mes = "Março";
//       return mes;
//     case 3:
//       mes = "Abril";
//       return mes;
//     case 4:
//       mes = "Maio";
//       return mes;
//     case 5:
//       mes = "Junho";
//       return mes;
//     case 6:
//       mes = "Julho";
//       return mes;
//     case 7:
//       mes = "Agosto";
//       return mes;
//     case 8:
//       mes = "Setembro";
//       return mes;
//     case 9:
//       mes = "Outubro";
//       return mes;
//     case 10:
//       mes = "Novembro";
//       return mes;
//     case 11:
//       mes = "Dezembro";
//       return mes;
//   }
// };

// setInterval(function relogio() {
//   const data = new Date();
//   const dataBrasil = formataData(data);

//   $("#data").html(`${dataBrasil}`);
// }, 100);

/////////////////////////////////////////// FORMA PADRAO /////////////////////////////////////////////////////////////

setInterval(function relogio() {
  const data = new Date().toLocaleDateString("pt-br", {
    dateStyle: "full",
  });

  $("#data").html(data);
}, 100);

const a = [10, 20, 30, 40];

[um, dois, treis] = a;

console.log(um, dois, treis);
