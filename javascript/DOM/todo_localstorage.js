const form = document.querySelector('form');
const tasks = JSON.parse(localStorage.getItem('todos')) ?? []; //null coleasing
let taskToBeEdited = null;

// Dom elements
const taskFormEl = document.getElementById('first-form');
const taskUlEl = document.getElementById('ul');
const taskSubmitEl = document.getElementById('submit');
const taskTaskEl = document.getElementById('task');
const submitFormEl = document.getElementById('submit-form');

// buttons to add
const deleteButton = "<button>delete</button>";
const editButton = "<button>edit</button>";


// create, read, update, delete
function addTask() {
  const task = taskTaskEl.value;
  let li = document.createElement('li');
  li.dataset.index = tasks.length;
  li.innerHTML = `${task} ${deleteButton} ${editButton}`;
  taskUlEl.append(li);
  taskFormEl.reset();
  tasks.push(task);
  localStorage.setItem('todos', JSON.stringify(tasks));
}

function readTask(taskToRender = tasks) {
  let taskList = "";
  taskToRender.forEach((task,index) => {
    taskList += `<li data-index="${index}">${task} ${deleteButton} ${editButton}</li>`;
  })
  taskUlEl.innerHTML = taskList;
}


function updateTask(target) {
  const { tagName, parentElement, textContent } = target;
  const indexOfTask = parentElement.dataset.index;
  const updateTaskValue = taskTaskEl.value;

  console.log(indexOfTask);
  console.log(parentElement);
  
  //updating the task innerHTML
  taskToBeEdited.innerHTML = `${updateTaskValue} ${deleteButton} ${editButton}`;
  
  tasks[indexOfTask] = updateTaskValue;
  localStorage.setItem('todos', JSON.stringify(tasks));

  //reseting the form
  taskFormEl.reset();

  //reset update to add
  taskSubmitEl.value = "Add";
  taskToBeEdited = null;
}


function removeTask(parentElement){
  const indexOfTaskToRemove = parentElement.dataset.index;
  tasks.splice(indexOfTaskToRemove, 1);
  localStorage.setItem('todos', JSON.stringify(tasks));
  readTask();
}



//Event listeners
taskFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskToBeEdited) updateTask(e.target);
  else addTask();
})

submitFormEl.addEventListener('submit', (e)=>{
  e.preventDefault();
  const searchValue = document.getElementById('search').value;
  const filteredList  = tasks.filter((task)=> task.includes(searchValue));
  readTask(filteredList);
})



taskUlEl.addEventListener('click', (e) => {
  const { tagName, parentElement, textContent } = e.target;

  if (tagName === "BUTTON") {

    if (textContent === "delete") {
      // console.log(parentElement);
      removeTask(parentElement);
      parentElement.remove();
    }

    if (textContent === "edit") {
      const indexOfTask = parentElement.dataset.index;
      taskTaskEl.value = tasks[indexOfTask];
      taskSubmitEl.value = 'Update';
      taskToBeEdited = parentElement;
    }
  }
})
readTask();