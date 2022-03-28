const ul = document.querySelector("ul");
let todo = document.querySelector("#todo");

const name = document.querySelector("#name");
const content = document.querySelector("#content");
const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoEl = document.createElement("li");
  todoEl.innerHTML = `<button id ="trash" onclick="this.parentElement.remove();" class="btn btn-outline-secondary">Delete</button><span>  <b>${name.value}</b> ${content.value}  </span> `;
  ul.appendChild(todoEl);
  name.value = "";
  content.value = "";
});
