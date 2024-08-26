const red = document.querySelector(`.plus`);
num = 0;
red.addEventListener("click", add);
// console.log("ajilah");
function add() {
  const boxDiv = document.createElement("div");
  boxDiv.style =
    "width: 100px; height: 100px; border: 1px solid orange; background-color: oronge; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-width:20px; margin:10px;";
  // let i = 0;
  num++;
  boxDiv.innerHTML = num;

  // for (let i = 0; i < 10; i++) {
  // boxDiv.innerHTML = i;
  //   console.log(i);
  //   // console.log("ajilah");
  //   // document.getElementsByTagName("div")[i].innerText = "Hello Pinecone";
  // }
  document.getElementById("container").appendChild(boxDiv);
}
