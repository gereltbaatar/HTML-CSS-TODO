const todos = [
  {
    title: "logon",
  },
];

const selectElement = document.getElementById("status");

document.getElementById("buttonAdd").addEventListener("click", clickBUtton);

function clickBUtton() {
  document.getElementById("addTask").style.display = "block";
  document.getElementById("filter").style.opacity = 0.4;
}

document.getElementById("submit").addEventListener("click", clickSubmit);
document.getElementById("filter").addEventListener("click", clickSubmit2);
document.querySelector("div.taskName");

function clickSubmit2() {
  document.getElementById("addTask").style.display = "none";
  document.getElementById("filter").style.opacity = 1;
}

function clickSubmit() {
  document.getElementById("addTask").style.display = "none";
  document.getElementById("filter").style.opacity = 1;
  selectedType = selectElement.options[selectElement.selectedIndex].value;
  const inputValue = document.querySelector("input.taskName").value;

  console.log(inputValue);
  const htmlValue = `<div class="about">
              <div class="check"></div>
              <div class="about-text">${inputValue}</div>
              <div id="buttonEdit" >
                <img src="./pincel.png" width="13px" height="13px" />
              </div>
              <div class="trashText">
                <img src="./trash.png" width="16px" height="16px" />
              </div>
            </div>`;

  const newElement = document.createElement("div");

  if (selectedType == "todo") {
    document.querySelector("div.new").appendChild(newElement);
    newElement.innerHTML = htmlValue;
  } else if (selectedType == "Inprogress") {
    document.querySelector("div.new2").appendChild(newElement);
    newElement.innerHTML = htmlValue;
  } else if (selectedType == "Done") {
    document.querySelector("div.new3").appendChild(newElement);
    newElement.innerHTML = htmlValue;
  } else if (selectedType == "Blocked") {
    document.querySelector("div.new4").appendChild(newElement);
    newElement.innerHTML = htmlValue;
  }

  document
    .getElementById("buttonEdit")
    .addEventListener("click", clickEditbutton);
  function clickEditbutton() {
    console.log("ajilah");
    document.getElementById("editTask").style.display = "block";
    document.getElementById("filter").style.opacity = 0.4;
  }

  document.getElementById("editTaskName").addEventListener("click", iditbutton);
  document.querySelector("div.editValue");

  function iditbutton() {
    document.getElementById("editTask").style.display = "none";
    document.getElementById("filter").style.opacity = 1;
    const inputEditValue = document.querySelector("input.editValue").value;

    console.log(inputEditValue);
  }
}
