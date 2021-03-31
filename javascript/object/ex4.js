// prototype

function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello', this.name, this.age);
    // };
}

Person.prototype.hello = function(){
    console.log('hello', this.name, this.age);
}

const p = new Person(`김영재`, 32);
console.log(p);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);
console.log("object")
console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); //person으로부터 받아왔냐?
console.log(p instanceof Object); //object로 부터 받아왔냐?

