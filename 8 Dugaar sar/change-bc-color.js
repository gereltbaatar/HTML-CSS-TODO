const background = document.getElementsByClassName("container")[0];
const changeButton = document.getElementById("change");

function rendomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const a = rendomColor();

changeButton.addEventListener("click", function () {
  background.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
