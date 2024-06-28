const form = document.querySelector('form');
let tasks = ["learn html", "learn js", "learn everything"];
// create, read, update, delete
function addTask(task){
  let ul = document.getElementById('ul');
  let li = document.createElement('li');
  li.innerHTML= task;
  ul.appendChild(li);
}

function readTask(){
  let string="";
  const ul = document.querySelector('ul');
  for(t of tasks){
    str= `<li>${t}</li>`;
    string += str;
  }
  ul.innerHTML= string;
}

function updateTask(index, task){
  tasks[index]=task;
}

function removeTask(index){
  tasks.splice(index,1);
}


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const task=document.querySelector('#task').value;
  addTask(task);
  document.getElementById('task').value='';
})
readTask();