function greet(name, phrase){
    phrase = phrase ?? "Hello"
    // console.log("hello" + name);
    // console.log(`helllo ${name}`);
    console.log(`${phrase} ${name}`);
}

function add(a, b=3){
    return a+b;
}

const return_from_greet = greet("Rakesh", "yello");
const result_sum = add(2, 3)

console.log(result_sum);
console.log(return_from_greet); //undefined


//function can be treated in the same way as any other variables. ie. function can be passed as an argument, can be assigned to other functions, can be returned from a function.

//function assignment
let sayHello = function(){
    console.log("Hello.");
};


let sayHelloAnother = sayHello;
sayHello();
sayHelloAnother();



// function as argument. The function that takes other function as argument is called high order function and the function used as argument is called callback function.
function highOrdeFunc(callBackFunction){
    callBackFunction();

    let returnedFunc = function(){
        console.log("test");
    }

    return returnedFunc;
}

let returnedFunc = highOrdeFunc(sayHello);

returnedFunc();


//ternary operator in function
let age =1;

let welcome = (age<18)? 
function(){console.log("Hello")}: 
function(){console.log("Greetings")};

welcome();

let add_second = (a,b) => {
    return a+b;
}

let sayHaloo = (name) => console.log(`hello ${name}`);
// let add_second = (a,b) => a+b;

add_second();


// let ask = (question, yes, no) => confirm(question)? yes():no();

// ask("are you sure you want to delete?", () =>console.log("You agreed"), () =>console.log("You canceled the execution"));


//object

const person = {
    name: "Rakesh",
    age: 12,
    salary:10000,
    father: {
        name: 'abc'
    }
}

person.name="Rakesh Pandey";

person.adderss="Baneshwor";
delete person.age;
console.log(person);
// console.log(person["name"]);
console.log(person.college);
console.log(person.father.name); //father has object
console.log(person.mother?.name); //mother itself is not defined and doesnot have object