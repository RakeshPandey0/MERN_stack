//Exercise 1: sum of elements
//calculate sum of every element in array

let numbers = [1, 2, 3, 4, 5];

//Using for loop

let sum=0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

//Using for...of loop

sum=0;
for(number of numbers){
    sum += number;
}
console.log(sum);

//Using higher order function (reduce)

sum = numbers.reduce((sum, current_value)=> sum + current_value, 0);
console.log(sum);


//Exercise 2: Filter even number
//Using for loop

let evens = [];
for (let i=0; i < numbers.length; i++){
    if (numbers[i]%2 === 0)
        evens.push(numbers[i]);
}
console.log(evens);

//using for...of loop
let evens_for_of =[];
for(number of numbers){
    if (number %2 === 0)
        evens_for_of.push(number)
}
console.log(evens_for_of);


//Using higher order functions
let evens_filter = numbers.filter(number=>number%2===0);
console.log(evens_filter);


//Exercise 3: Double the values
//Using for loop
double_numbers = [];
for(let i=0; i<numbers.length; i++){
    double_numbers[i]=numbers[i]*2;
}
console.log(double_numbers);

//Using for......of loop
double_numbers=[];
for(number of numbers){
    double_numbers.push(number*2);
}
console.log(double_numbers);

//Using higher order function map()
double_numbers= numbers.map((number)=>number*2);
console.log(double_numbers);

//Exercise 4: Find maximum value
//Using for loop
max=numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i]>max) max=numbers[i];
}
console.log(max);

//Using for....of loop
max=numbers[0];
for(number of numbers){
    if(number>max) max=number;
}
console.log(max);

//Using higher order function reduce
max= numbers.reduce((prev, curr)=>{
    return curr>prev?curr:prev;
},numbers[0])
console.log(max);