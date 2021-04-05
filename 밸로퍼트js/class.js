class Animal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    say(){
        console.log(this.sound);
    }
}

//extends는 특정 클래스를 상속받음
class Dog extends Animal {
    constructor(name, sound){
        super('개', name, sound);//자신이 상속받은 constructor를 호출
    }
}
class Cat extends Animal {
    constructor(name, sound){
        super('고양이', name, sound);//자신이 상속받은 constructor를 호출
    }
}
const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
