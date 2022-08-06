(function () {
  ///////////////////// CALLBACK //////////////////////

  function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }

  function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
      console.log(msg);
      if (cb) cb();
    }, tempo);
  }

  // esperaAi("frase 1", rand(1, 3), function () {
  //   esperaAi("frase 2", rand(1, 3), function () {
  //     esperaAi("frase 3", rand(1, 3));
  //   });
  // });
})();
(function () {
  /////////////////// PROMISSES ////////////////////////
  function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      //Posso utilizar o reject tambem assim como exemplo
      //caira no cath o erro, porem se eu não colocar um return
      //vai continuar executando o codigo apenas retornando
      //o erro no catch, o return vai parar toda cadeia de promisses
      if (typeof msg !== "string") reject("deve ser string apenas");
      setTimeout(() => {
        console.log(msg);
        //posso passar um argumento no proprio resolve se quiser
        //resolve tem que tar no termino doque é pra fazer
        resolve("ola sou o numero 3");
      }, tempo);
    });
  }
  // esperaAi("frase 1", rand())
  //   .then(() => esperaAi("frase 2", rand()))
  //   .then((resposta) => console.log(resposta))
  //   .then(() => esperaAi("frase 4", rand()))
  //   .catch((erro) => console.log(erro));
})();
(function () {
  ///////////////// METODOS UTEIS PROMISSES ////////////////
  //Promise.all, Promise.race, Promise.resolve, Promise.reject;
  function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof msg !== "string") reject("deve ser string");
        resolve(msg);
      }, tempo);
    });
  }
  /** //////// PROMISE.ALL //////////
   * pega um array de argumento contendo
   * todas promessas ou valores e vai entregar tudo
   * apenas após todas estiverem concluidas em um array
   * lembrando que oque vai voltar pro array é apenas oque
   * estiver dentro do argumento "resolve(apenas 1 argumento)"
   * */
  const promises = [
    esperaAi("promise 1", rand()),
    esperaAi("promise 2", rand()),
    esperaAi("promise 3", rand()),
    "valor",
  ];

  Promise.all(promises)
    .then((valor) => console.log("Exemplo 1 de Promise.all", valor))
    .catch((err) => console.log(err));

  // Outro exemplo

  const promise1 = esperaAi("Promise 4", rand());
  const promise2 = esperaAi("Promise 5", rand());
  const promise3 = esperaAi("Promise 6", rand());
  const valor = "valor";

  Promise.all([promise1, promise2, promise3, valor])
    .then((valor) => console.log("Exemplo 2 de Promise.all", valor))
    .catch((err) => console.log(err));

  /** //////// PROMISE.RACE //////////
   *  Igual ao promise.all pega um array de argumento
   * contendo todas promessas ou valores e vai entregar
   * o primeiro a ser resolvido, no caso se tiver
   * um valor entre as promessas ele vai ser o primeiro
   * a ser resolvido, então entregado. porem todas promessas
   * ou valores ainda vão ser executados não tem como parar
   * mas ira te mostrar o primeiro valor carregado
   * */

  Promise.race(promises)
    .then((v) => console.log("Exemplo Promise.race", v))
    .catch((err) => console.log(err));

  /** //////// PROMISE.RESOLVE & PROMISE.REJECT //////////
   * Pelo que eu entendi até agora enquanto escrevo
   * é isso, pra que usaria não sei ja que o if e o else
   * ja faz o trabalho, mas deve ser usado provavelmente pra
   * maniputlar uma função forcando um reject ou resolve
   * */
  function baixaPagina(x, y) {
    const emCache = x;
    const erro = y;

    if (erro) {
      return Promise.reject("Exemplo resolve/reject Pagina danificada");
    } else if (emCache) {
      Promise.resolve("Exemplo resolve/reject Pagina ja em cache");
    } else {
    }
  }
  baixaPagina(true, true)
    .then((valor) => console.log(valor))
    .catch((e) => console.log("erro", e));
})();

(function () {
  //////////////////////////// ASYNC AWAIT ////////////////
  function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }

  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof msg !== "string") reject("deve ser string");
        resolve(msg);
      }, tempo);
    });
  }

  /**
   * Talvez oque eu mais vou usar fora de banco de dados
   * é o Async Await igual o promise porem pra ter o 'cath'
   * só pelo 'try/cath' dependendo do objetivo é bem mais
   * pratico usar async await doque promise e em outras ocasiões
   * promisses
   */

  (async function () {
    try {
      const a = await esperaAi("Exemplo - Async function 1", rand());
      console.log(a);
      const b = await esperaAi("Exemplo - Async function 2", rand());
      console.log(b);
      const c = await esperaAi("Exemplo - Async function 3", rand());
      console.log(c);
    } catch (e) {
      console.log(e);
    }
  })();
})();

// estados das funções
// pending inicia
// fullfilld resolvida
// rejected rejeitada
