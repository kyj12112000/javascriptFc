// 멤버 변수

class A{
    constructor(name, age){
        this.name = name;
        this. age = age;
    }
}

console.log(new A('Brad', 30));

//class field 는 런타임 확인

class B{
    name;
    age;
}

console.log(new B());

class C{
    name = 'no name';
    age = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mark'),30);