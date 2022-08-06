function mostraHora() {
  let data = new Date(2000, 6, 1, 0, 0, 0);
  i = data + 1;
  return i.toLocaleTimeString("pt-BR");
}

setInterval(function intervalo() {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);
