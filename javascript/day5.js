// Array

//const arr=[1,2,3,4]
const arr = new Array(); //let arr=[]
arr[0]=1;
arr[1]=2;


const names=["shisir", "rakesh", "prashant"];

// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

names.push("pratik");

//for(constt key in person)

for(let name of names){
    console.log(name);
}

console.log(arr);


//mix of values
let arr_2=['Name', {'name':"name"}, true, function(){console.log("name")}];

console.log(arr_2[0]);
console.log(arr_2[1]['name']);
console.log(arr_2[2]);
arr_2[3]();


//unshift -> adds item to the begining of the array
names.unshift("shirish");
console.log(names);
console.log("last", names.at(-1));


//matrix

matrix = [[9, 13, 5, 2], [1, 11, 7, 6], [3, 7, 4, 1], [6, 0, 7, 10]];

for(row of matrix){
    console.log(row);
}



//foreach function

const greet = (name)=>{console.log(`hello, ${name}`)};
names.forEach(greet);
names.forEach((name)=>{console.log(`hello, ${name}`)});

let numbers = [1, 2, 32, 4];
const doubleNumbers = [];

//simple looping
numbers.forEach((number, index)=>{doubleNumbers[index]=number*2});

//map function -> same size but modify the elements
//const doubleNumbers = numbers.map((number)=>{return number*2;});

//filter -> extract elements out of the array
const numberGreaterThan30 = numbers.filter((number)=>{return number>30;});
console.log("Greater than 30", numberGreaterThan30);


let numberGreaterThan30for=[];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>30) numberGreaterThan30for.push(numbers[i]);
}
console.log(numberGreaterThan30for);

//find method
const rakesh = names.find((name)=> name==="rakesh");
console.log(rakesh);

const products =[
    {name:"Laptop", price:300},
    {name:"Phone", price:200},
    {name:"Tablet", price:150},
    {name:"Monitor", price:400}
]

const prices = products.map((product)=>product.price);
const productLabel = products.map((product)=> `${product.name}(${product.price})`);
console.log(productLabel);

const priceofPhone = products.find((product)=>product.name==="Phone").price;
console.log(priceofPhone);

//find the items whose price is greater than 190
const productGreaterThan190 = products.filter((product)=>product.price>190);

console.log(productGreaterThan190);

//does the product include cheap product. Person is said to be cheap if their price is lower than 200 hints use some() method

const isCheap = products.some((product)=>product.price<200);
console.log(isCheap?"Cheap":"Not Cheap");

//are all items cheap

const isExpensive = products.every((product)=> product.price<200);
console.log(isExpensive?"Everything cheap":"Not everything cheap");



//Question
const students = [
    { name: 'Alice', score: 85, favFruit: 'apple' },
    { name: 'Bob', score: 92, favFruit: 'apple'  },
    { name: 'Charlie', score: 48, favFruit: 'orange' },
    { name: 'David', score: 74,favFruit: 'pineapple' },
    { name: 'Eve', score: 68, favFruit: 'orange' }
];

// needed output
// {
// 	apple: 2,
// 	orange: 2,
// 	pineapple: 1,
// }

let result = {}
function countResult(obj){
    let fruit=obj.favFruit;
    if (!(fruit in result)){
        result[fruit]=0;
    }
    result[fruit]++;
}
students.forEach(countResult);
console.log(result);