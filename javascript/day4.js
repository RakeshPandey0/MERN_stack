// const obj={
//     key: value
// }

const person={
    name:"rakes",
    age: 22
}


person.name="rakesh";
person.school="avn";
delete person.age;
console.log(person);


//1 objects are passed by reference

//2. even if the objects are defined using const, we can change the value of the properties inside it, but we cannot reassign to new object or other value

//3. Two object with same property and value are not equal

const anotherPerson = person; //now anotherPerson points to the same address in memory

anotherPerson.college="kec";

console.log(anotherPerson === person); //since both the objects point to same address, the answer is true
console.log(person);

function test(p){
    p.age="test";
    p.school='bdsakfl'
}

test(person);

console.log(person);


// let string = prompt('What data of person do you want?');
// alert(person[string]??"die!!!!!!!");


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
        console.log(this); //person

        arrow_inside_normal = ()=>{
            console.log("Arrow func inside normal Func");
            console.log(this); //person
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

// while(1){
//     const key=prompt("Enter student key");
//     if(key == 'exit')
//         break;
//     const value=prompt("Enter student value");
//     student[key]=value;
// }
const student= {}

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

// console.log(person_2.vegetable?.tomato??"no tomato"); //optional chaining and null coalesing
// person_2.greet();
// console.log(person_2.subjects);

