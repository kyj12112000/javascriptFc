//생성자 함수를 이용하여 새로운 객체 만드는 방법
//this 객체를 만들었을때 객체를 가리킴

function Person(name, age){
   console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('mark', 30);

console.log(p.name, p.age);

const a =new Person('김', 30);
console.log(a, a.name, a.age);

console.log(p);