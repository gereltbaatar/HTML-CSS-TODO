const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inprogress",
  DONE: "done",
  BLOCKED: "blocked",
};

let todos = [];

// id class call zone start__________________________________________________________
const todoTasksContainer = document.getElementById("todo_tasks_container");
const inProgressTasksContainer = document.getElementById(
  "inprogress_tasks_container"
);
const doneTasksContainer = document.getElementById("done_tasks_container");
const blockedTasksContainer = document.getElementById(
  "blocked_tasks_container"
);

const addTaskButton = document.getElementById("add_button");
const submitButton = document.getElementById("sub_input");
const dialogContainer = document.querySelector("div.addTask");
const titleEdit = document.querySelector("p.title_inter");
const inputElement = document.querySelector("input.task_name");
const selectElement = document.getElementById("status");

const numberTodoElement = document.querySelector("p.numberTODO");
const numberInprogressElement = document.querySelector("p.numberINPR");
const numberDoneElement = document.querySelector("p.numberDONE");
const numberBlockElement = document.querySelector("p.numberBLCD");

// id class call zone end__________________________________________________________

// use value zone start____________________________________________________________
let isCreatingTask = false;
let taskId = 0;
// use value zone end______________________________________________________________

//function start___________________________________________________________________

function renderTASKweb() {
  let todoAbout = ``;
  let inProgressAbout = ``;
  let doneAbout = ``;
  let blockedAbout = ``;

  let countNumberT = 0;
  let countNumberI = 0;
  let countNumberD = 0;
  let countNumberB = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === STATUSES.TODO) {
      todoAbout += `<div class="about">
              <div class="check"></div>
              <div class="about-text">${todos[i].text}</div>
             <button id="buttonEdit" onclick="editTask(${todos[i].id})">
                  <img src="./pincel.png" width="13px" height="13px" />
              </button>
              <button id="trash" onclick="trashTask(${todos[i].id})">
                <img src="./trash.png" width="16px" height="16px" />
              </button>
            </div>`;
      countNumberT++;
    }
    if (todos[i].status === STATUSES.INPROGRESS) {
      inProgressAbout += `<div class="about">
              <div class="check"></div>
              <div class="about-text">${todos[i].text}</div>
             <button id="buttonEdit" onclick="editTask(${todos[i].id})">
                  <img src="./pincel.png" width="13px" height="13px" />
              </button>
               <button id="trash" onclick="trashTask(${todos[i].id})">
                <img src="./trash.png" width="16px" height="16px" />
              </button>
            </div>`;
      countNumberI++;
    }
    if (todos[i].status === STATUSES.DONE) {
      doneAbout += `<div class="about">
              <div class="check"></div>
              <div class="about-text">${todos[i].text}</div>
               <button id="buttonEdit" onclick="editTask(${todos[i].id})">
                  <img src="./pincel.png" width="13px" height="13px" />
              </button>
              <button id="trash" onclick="trashTask(${todos[i].id})">
                <img src="./trash.png" width="16px" height="16px" />
              </button>
            </div>`;
      countNumberD++;
    }
    if (todos[i].status === STATUSES.BLOCKED) {
      blockedAbout += `<div class="about">
              <div class="check"></div>
              <div class="about-text">${todos[i].text}</div>
               <button id="buttonEdit" onclick="editTask(${todos[i].id})">
                  <img src="./pincel.png" width="13px" height="13px" />
              </button>
               <button id="trash" onclick="trashTask(${todos[i].id})">
                <img src="./trash.png" width="16px" height="16px" />
              </button>
            </div>`;
      countNumberB++;
    }
  }
  todoTasksContainer.innerHTML = todoAbout;
  inProgressTasksContainer.innerHTML = inProgressAbout;
  doneTasksContainer.innerHTML = doneAbout;
  blockedTasksContainer.innerHTML = blockedAbout;
  inputElement.value = "";

  numberTodoElement.innerHTML = countNumberT;
  numberInprogressElement.innerHTML = countNumberI;
  numberDoneElement.innerHTML = countNumberD;
  numberBlockElement.innerHTML = countNumberB;
  // selectElement.value = "";
  taskId = 0;
  isCreatingTask = false;
}

renderTASKweb();

addTaskButton.addEventListener("click", addTask);
submitButton.addEventListener("click", submit);

function addTask() {
  isCreatingTask = true;
  dialogContainer.classList.add("flex");
  titleEdit.innerHTML = "Enter task";
}

function submit() {
  if (isCreatingTask) {
    todos.push({
      text: inputElement.value,
      status: selectElement.value,
      id: randomIntFromInterval(),
    });
  } else {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === taskId) {
        todos[i].text = inputElement.value;
        todos[i].status = selectElement.value;
      }
    }
  }

  // submitButton.onclick = () => {

  // };
  //test zone start_____________________________________________

  //test zone end_____________________________________________

  renderTASKweb();
  dialogContainer.classList.remove("flex");
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * 1000);
}

function trashTask(id) {
  let trashArray = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      trashArray.push(todos[i]);
    }
  }

  todos = trashArray;
  renderTASKweb();
}

function editTask(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      inputElement.value = todos[i].text;
      selectElement.value = todos[i].status;
    }
  }
  taskId = id;
  titleEdit.innerHTML = "Edit task";
  dialogContainer.classList.add("flex");
}

//function end_____________________________________________________________________
