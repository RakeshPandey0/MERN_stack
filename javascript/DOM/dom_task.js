//Task:
// In index.html file:
// 1. find 'ul' Element.
// 2. add 3 items to the list using innerHTML command.
// 3. with each element, there is a delete button.
// 4. when delete button is clicked, that element is removed from the list.

const tasks = ["learn html", "learn js", "learn everything"];

// let string = "";
// for (task of tasks) {
//   task_str = `<li id=list${tasks.indexOf(
//     task
//   )}>${task} <button>delete</button></li>`;
//   string += task_str;
// }

// const ul = document.getElementById("list");
// ul.innerHTML = string;

// const button = document.querySelector("button");
// button.addEventListener('click', ()=>{
//   button.parentElement.remove();
// })

// document.getElementById("body").addEventListener("click", (e)=>{
//   console.log("anywhere in body");
//   console.log(e);
// })


// create, read, update, delete
function addTask(task){
  tasks.push(task);
}

function readTask(index){
  tasks.forEach((task)=>{
    console.log(task);
  })
}

function updateTask(index, task){
  tasks[index]=task;
}

function removeTask(index){
  tasks.splice(index,1);
}

addTask("ram");

updateTask(0, "hari");

removeTask(2);
readTask();
