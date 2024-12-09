
let letters = "0123456789ABCDEF";
let color = "#";
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.onclick = () => {
  color = "#"; // Reset color on each click
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  result.textContent = color;
  document.body.style.backgroundColor = color;
};