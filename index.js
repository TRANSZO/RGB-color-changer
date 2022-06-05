const mynum = document.querySelector("#demo3");
function mynum3() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}

mynum.addEventListener("click", () => {
  const color1 = mynum3();
  document.body.style.backgroundColor = color1;
  document.querySelector("#demo").textContent = color1;
});
