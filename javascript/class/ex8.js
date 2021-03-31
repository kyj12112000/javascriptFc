//변수 , 함수 추가 및 오버리이딩
/*
override 부모에서 구현된 함순아 변수가 자식에게서 똑같이 구현 시킨 것이 오버라이드 
자식이 만든 함수가 부모가 만든 것을 덮어 씌움 부모가 가지고 있지 않은 경우 자식이 추가를 하게됨
*/

class Parent {
    name = 'Lee';

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
    age = 37;

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c);
c.hello();
c.name = 'Anna';
c.hello();