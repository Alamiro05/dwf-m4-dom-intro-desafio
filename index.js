const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

const lista = document.querySelector("ul");

const elementosLi = lista.querySelectorAll("li");

elementosLi.forEach((li) => {
  lista.removeChild(li);
});

cosasQueAprendimos.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item.tema;
  if (item.class) {
    li.classList.add(item.class);
  }
  lista.appendChild(li);
});
function main() {}

main();
