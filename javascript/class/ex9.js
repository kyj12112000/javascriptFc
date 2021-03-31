// super

class Parent{
    name;

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
    age;
    constructor(name, age){
        //부모에서 하는 일을 하고 자식이 하는일을 할수 있또록 this 사용전 super를 꼭 호출 하도록 함
        super(name);
        this.age = age;
    }

    hello(){
        console.log(this.name, this.age);
    }
}

const p = new Parent('mark');
const c = new Child('mark',30);

console.log(p, c);
p.hello();
c.hello();