const tasks =["learn html", "learn js", "learn everything"];

let string=""
for (task of tasks){
    task_str= `<li>${task} <button>delete</button></li>`;
    string += task_str;
}

const ul = document.querySelector('ul');
ul.innerHTML= string;

//selecting elements
const elementByID= document.getElementById('title');
console.log(elementByID); //logs the <h1> element

const elementByClass= document.getElementsByClassName('para');
console.log(elementByClass); //logs live HTMLcollection of elements with class para

const elementByTag= document.getElementsByTagName('p');
console.log(elementByTag); //logs live HTMLcollection of <p> elements

const firstParagraph= document.querySelector('p');
console.log(firstParagraph); //logs first <p> element

const allParagraph= document.querySelectorAll('p');
console.log(allParagraph);
