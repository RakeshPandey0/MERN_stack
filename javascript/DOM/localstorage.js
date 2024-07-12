localStorage.setItem('name', 'Rakesh');
localStorage.setItem('age', 22);

//localStorage.clear();

const todos = ["learn html, css & js", "learn css", "learn react"];

localStorage.setItem('todos', JSON.stringify(todos));

const todosFromLS = localStorage.getItem('todos');
console.log(JSON.parse(todosFromLS));