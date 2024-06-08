// const obj={
//     key: value
// }

const person={
    name:"rakes",
    age: 22
}


const anotherPerson={
    name:"rakes",
    age: 22
}

console.log(anotherPerson === person); //even though they both have same value, they point to two different blocks in memory. Hence, the result is false


person.name="rakesh";
person.school="avn";
delete person.age;
console.log(person);


//1 objects are passed by reference

//2. even if the objects are defined using const, we can change the value of the properties inside it, but we cannot reassign to new object or other value

//3. Two object with same property and value are not equal

const anotherPerson2 = person; //now anotherPerson points to the same address in memory


console.log(anotherPerson2 === person); //since both the objects point to same address, the answer is true

anotherPerson.college="kec"; //both objects are referenced to same memory location. So, changing value in one will automatically change value in the other.
console.log(person);

function test(p){
    p.age="test";
    p.school='bdsakfl'
}

test(person);

console.log(person);


// let string = prompt('What data of person do you want?');
// alert(person[string]??"die!!!!!!!");

//arrow function does not bind "this" property. Rather it binds "this" of it's outer function

console.log("Outside this");
console.log(this);




const person_2 ={
    name:"rakesh",
    age:22,
    school:"avn",
    salary:10000,
    college:"kec",
    fruits:{
        apple:1,
        mango:2,
        watermelon:3
    },
    subjects:['c', 'dsa'],
    greet: function (){
        // console.log("hello");
        console.log("Normal Func");
        console.log(this); //person. Own "this"

        arrow_inside_normal = ()=>{
            console.log("Arrow func inside normal Func");
            console.log(this); //person. "this" of outside scope
        }

        arrow_inside_normal();
    },

    greetArrow: ()=>{
        console.log("Arrow Func");
        console.log(this);
    }
    
}



person_2.greet();
person_2.greetArrow();



for(const key in person){
    console.log(key, person[key]);
}


//Question
// const student ={};
// const key=prompt('Enter student key');
// const value=prompt('Enter student value');


//Solution
// while(1){
//     const key=prompt("Enter student key");
//     if(key == 'exit')
//         break;
//     const value=prompt("Enter student value");
//     student[key]=value;
// }

//create object
const student= {}

//recursive function to take input
function enter(){
    const key=prompt("Enter student key");
    if(key === 'exit')
        return 0;
    const value=prompt("Enter student value");
    student[key]=value;

    enter();
}

enter();
console.log(student);

console.log(person_2.vegetable?.tomato??"no tomato"); //optional chaining and null coalesing
// person_2.greet();
// console.log(person_2.subjects);

