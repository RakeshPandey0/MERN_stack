//Exercise 1: sum of elements
//calculate sum of every element in array

let numbers = [1, 2, 3, 4, 5];

//Using for loop

let sum=0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[0];
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



//Exercise 2: Filter even number
//Using for loops

let numbers_2 = [1, 2, 3, 4, 5];
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
let evens_filter = numbers.filter()