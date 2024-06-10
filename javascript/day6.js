const numbers = [2, 4, 10, 15]

let sum=0;
for(element of numbers){
    sum += element;
}
console.log(sum);

//reduce method

const total = numbers.reduce((prev, curr)=>{
    console.log({prev, curr});
    return prev+curr;
},0 //initialization(if necessary)
);
console.log(total);

//question
const cart =[
    {name:"Laptop", price:300},
    {name:"Phone", price:200},
    {name:"Tablet", price:150},
    {name:"Monitor", price:400}
];

//find the total price
const total_price=cart.reduce((prev, curr)=>{
    return prev + curr.price;
},0);
console.log(total_price);

const person ={
    Name:'Rakesh',
    age: 22,
    education: {
        college:'kec',
        profession:'student',
    },
    dob: 100
};
// const name = person.name;
// const age = person.age;

// const {Name, age, education:{ college } ,...remainingProperty} = person;
//const {name: personName, age: personAge} = person;

// console.log(Name, age, college, remainingProperty);

// function printStudentDetails({Name, age}){
//     //const {name, age}= person;
//     console.log(`Name: ${Name}, Age: ${age}`)
// }
// printStudentDetails(person);

// //copying object

// const anotherPerson = {...person};
// console.log(anotherPerson);

// anotherPerson.Name = 'Rakesh pandey';
// console.log(person); //copy. So, no change

// //but there is eduction, another object inside person object. It is not copied but is taken as reference. So, any change made to education in person will be seen in education in another person.

// anotherPerson.education.profession='Developer';
// console.log(person.education.profession);

// //solution

// const anotherPerson_2 = {...person, education: {...person.education}};
// anotherPerson_2.education.profession='Developer';
// console.log(person.education.profession);


// const {
//     Name: personName,
//     age,
//     education: {college},
//     ...remainingProps
// }=person;

// console.log(personName, college, remainingProps);

const number = [10, 20, 30, 40, 50];
const firstNum=number[0];
const secondNum=number[1];

const [first, second, ...remaining]=number;
console.log(first, second, remaining);


// case I : ...remaining=person;  (... is called rest operator)
// case I : anotherPerson: ...person;  (... is called spread operator)

function test(...v){
    console.log(v);
}
test(10,20,30);

const testPerson ={
    name:'ram',
    age:10
}
console.log(Object.keys(testPerson));
console.log(Object.values(testPerson));
console.log(Object.entries(testPerson));

for(const [key, value] in testPerson.entries){
    console.log(key, value);
}

