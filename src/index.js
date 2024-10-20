import "./styles.css";

let counter = 0;
const x = document.createElement("div");
document.querySelector("button").addEventListener("click", () => {
  counter++;
  x.textContent = counter;
  document.querySelector("body").appendChild(x);
});
