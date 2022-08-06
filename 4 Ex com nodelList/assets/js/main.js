const paragrafos = document.querySelector(".paragrafos");
const p = paragrafos.querySelectorAll("p");

const backgroundBody = getComputedStyle(document.body);
const backgroundColorBody = backgroundBody.backgroundColor;

console.log(p);

console.log(paragrafos);
for (let parag of p) {
  parag.style.backgroundColor = backgroundColorBody;
}
