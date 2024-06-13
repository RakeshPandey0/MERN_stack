const person = {
    name: "Rakesh",
    age:10,
    sayHello3(){
        console.log("hello");
    }
}

console.log(person.age);
console.log(person.hasOwnProperty('name'));

const animal = {
    noOfLegs: 4
}

animal.__proto__ = person;

console.log(animal);
console.log(animal.age);
console.log(animal.hasOwnProperty('noOfLegs'));


function Person(name, age){
    this.name = name;
    this.age=age;
}

Person.prototype.sayHello = function(){
    console.log(this);
    console.log("Hello");
};

const rakesh = new Person('rakesh', 10);
rakesh.sayHello();

Student.prototype.getSchool = function(){
    console.log(this.school);
}

function Student(name, age, school){
    Person.call(this, name, age);
    this.school = school;
}

const shisir = new Student('shisir', 10, 'kec');
console.log(shisir);

//prototype Person not linked
Object.setPrototypeOf(Student.prototype, Person.prototype);
shisir.sayHello();
shisir.getSchool();

//then in 2015 ES6 released that released the concept of class

class Person_2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Student_2 extends Person_2{
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }
    getSchool(){
        console.log(this.school);
    }
}

const riya = new Student_2('riya', 6, 'kec');
riya.getSchool();
