class MathUtils{
    static PII = 3.14
    static add(a,b){
        return a+b;
    }
}
console.log(MathUtils.PII);
console.log(MathUtils.add(1,2));

class Person{
    constructor(fullname,age){
        this.fullname = fullname; //to make private this.#fullname. To make protected, this._fullname
        this.age = age;
    }

    sayHello(){
        console.log(`${this.fullname}: Hello`);
    }

    get name(){
        return this.fullname;
    }

    set name(value){
        this.fullname=value;
    }
}

const p= new Person('rakesh', 10)
console.log(p.fullname);
p.fullname='shisir';
console.log(p.fullname);

class Rectangle{
    constructor(height, width){
        this._height=height;
        this._width=width;
    }

    get area(){
        return this._height * this._width;
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error('Height must be a positive number');
        }
    }

    get height() {
        return this._height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.error('Width must be a positive number');
        }
    }

    get width() {
        return this._width;
    }
}
