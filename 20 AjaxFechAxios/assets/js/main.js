//////// FETCH API + AXIOS /////////////////////////////
function axios2() {
  let re = document.getElementById("pagina");
  let links = document.querySelectorAll(".d-flex a");
  for (let link of links) {
    let h = link.getAttribute("href");
    link.addEventListener("click", function (e) {
      e.preventDefault();
      axios(h).then((resposta) => {
        if (resposta.status >= 300 && 200 > resposta.status)
          return console.warn(resposta.status);
        re.innerHTML = resposta.data;
      });
    });
  }
}
axios2();
//////// FETCH API + AXIOS (JSON) /////////////////////////////
function axiosJson() {
  axios("pessoas.json").then((resposta) => load(resposta.data));

  function load(json) {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let trTh = tr;
    let ths = json[Object.keys(json)[0]];
    ths = Object.keys(ths);
    for (let th of ths) {
      let newTh = document.createElement("th");
      newTh.innerHTML = th;
      trTh.appendChild(newTh);
    }
    table.appendChild(trTh);
    for (let vs of json) {
      let newtr = document.createElement("tr");
      for (let i = 0; i < Object.keys(vs).length; i++) {
        let newtd = document.createElement("td");
        newtd.innerHTML = vs[Object.keys(vs)[i]];

        newtr.appendChild(newtd);
        table.appendChild(newtr);

        if (i == Object.keys(vs).length - 1) {
        }
      }
    }
    document.getElementById("pagina").appendChild(table);
    table.classList.add("table");
  }
}
btnJson = document.getElementById("btn-json");
btnJson.addEventListener("click", axiosJson);

//////// FETCH API (GET) /////////////////////////////
function fetchApi() {
  let re = document.getElementById("pagina");
  let links = document.querySelectorAll(".d-flex a");
  for (let link of links) {
    let h = link.getAttribute("href");
    link.addEventListener("click", function (e) {
      e.preventDefault();
      fetch(h)
        .then((resposta) => {
          if (resposta.status >= 300 && 200 > resposta.status)
            return console.warn(resposta.status);
          return resposta.text();
        })
        .then((text) => (re.innerHTML = text))
        .catch((e) => console.log(e));
    });
  }
}
//fetchApi();
//////// AJAX //XML HTTP Request (GET) // COM ASSYNC //////////// XXXXXXXXXXXXXXXXXXXXXXXXXXXX
function ajaxComAssync() {
  function request(obj) {
    const xhr = new XMLHttpRequest(obj);
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("oi");
        x = xhr.responseText;
        console.log(x);
        text = x;
      } else {
        return console.log(xhr.statusText);
      }
    });
  }
  let text;
  let re = document.getElementById("pagina");
  let links = document.querySelectorAll(".d-flex a");
  function xi() {
    console.log(text);
    re.innerHTML = text;
  }
  async function load(h) {
    await request({
      method: "GET",
      url: h,
    });
    xi();
  }
  for (let link of links) {
    let h = link.href;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      load(h);
    });
  }
}
//ajaxComAssync();

//////// AJAX //XML HTTP Request (GET) // COM PROMISSE ////////////
function ajaxComPromise() {
  const request = (obj) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(obj);
      xhr.open(obj.method, obj.url, true);
      xhr.send();
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("oi");
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };

  let re = document.getElementById("pagina");
  let links = document.querySelectorAll(".d-flex a");
  for (let link of links) {
    let h = link.href;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      request({
        method: "GET",
        url: h,
      })
        .then((text) => {
          re.innerHTML = text;
        })
        .cath((e) => {
          console.log(e);
        });
    });
  }
}
///ajaxComPromise();
//////// AJAX //XML HTTP Request (GET) // COM CALLBACK ////////////

function ajax() {
  const request = (obj) => {
    const xhr = new XMLHttpRequest(obj);
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("oi");
        obj.success(xhr.responseText);
      } else {
        obj.error(xhr.statusText);
      }
    });
  };

  (function () {
    let re = document.getElementById("pagina");
    let links = document.querySelectorAll(".d-flex a");
    for (let link of links) {
      link.addEventListener("click", (e) => {
        let h = link.href;
        e.preventDefault();
        request({
          method: "GET",
          url: h,
          success(text) {
            re.innerHTML = text;
          },
          error(err) {
            console.log(err);
          },
        });
      });
    }
  })();
}
//ajax()
