const form = document.querySelector('form');
let tasks = ["learn html", "learn js", "learn everything"];
let taskToBeEdited = null;

// Dom elements
const taskFormEl = document.querySelector('form');
const taskUlEl = document.getElementById('ul');
const taskSubmitEl = document.getElementById('submit');
const taskTaskEl = document.getElementById('task');


// create, read, update, delete
function addTask(){
  const task = taskTaskEl.value;
  let li = document.createElement('li');
  li.innerHTML= `${task} <button>delete</button> <button>edit</button>`;
  taskUlEl.appendChild(li);
  taskFormEl.reset();
}

function readTask(){
  let string="";
  const deleteButton = "<button>delete</button>";
  const editButton = "<button>edit</button>";

  for(t of tasks){
    str = `<li>${t} ${deleteButton} ${editButton}</li>`;
    string += str;
  }
  taskUlEl.innerHTML= string;
}


function updateTask(){
  const deleteButton = "<button>delete</button>";
  const editButton = "<button>edit</button>";
  const updateTaskValue = taskTaskEl.value;

  //updating the task innerHTML
  taskToBeEdited.innerHTML = `${updateTaskValue} ${deleteButton} ${editButton}`;
  
  //reseting the form
  taskFormEl.reset();

  //reset update to add
  taskSubmitEl.value = "Add";
  taskToBeEdited = null;
}


function removeTask(e){
}



//Event listeners
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(taskToBeEdited) updateTask();
  else addTask();  
})


taskUlEl.addEventListener('click', (e)=>{
  const {tagName, parentElement, textContent} = e.target;

  if (tagName === "BUTTON"){
    
    if(textContent === "delete")
    parentElement.remove();
    
    if(textContent === "edit"){

    // const taskToBeUpdated = e.target.parentElement.textContent.replace("edit", "").replace("delete", "");
    const taskToBeUpdated = parentElement.textContent.split(' ').slice(0,-2).join(' ');  
    document.taskTaskEl.value= taskToBeUpdated;
    taskSubmitEl.value = 'Update';
    taskToBeEdited = parentElement;

    }

  }

})
readTask();