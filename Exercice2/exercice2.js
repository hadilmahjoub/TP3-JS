const fonts = [
  "Arial",
  "Courier New",
  "Vernada",
  "Georgia",
  "Times New Roman",
  "Lucida Handwriting",
  "Papyrus",
  "Brush Script MT"
];

const select = document.querySelector("select");
fonts.forEach((element) => {
  console.log("test");
  let line = `<option value=${element}>${element}</option>`;
  select.innerHTML += line;
});

const p = document.querySelector("p");

//? change color
const color = document.querySelector("#color");
color.addEventListener(
  "input",
  (event) => (p.style.color = event.target.value)
);

//? change font size
const size = document.querySelector("#size");
size.addEventListener(
  "input",
  (event) => (p.style.fontSize = event.target.value + "px")
);

//? change font family
const font = document.querySelector("#font");
font.addEventListener(
  "change",
  (event) => (p.style.fontFamily = event.target.value)
);
// const p = document.querySelector('p');
// const op = document.querySelectorAll('option')
// op.addEventListener('input', () => {
//     para.style.fontFamily = op.values;
// })
