//constructor

class A{}

console.log(new A());

class B{
    constructor(){//객체 생성시 수행할 로직
        console.log('constructor')
    }
}

console.log(new B());

class C{
    constructor(name, age){
        console.log('constructor', name, age);
    }
}

console.log(new C('김영재',30));