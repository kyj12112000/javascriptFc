// 상속기본

class Parent{ //부모클래스
    name = 'Lee';
    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent {}//자식클래스

const p = new Parent();
const c = new Child();
console.log(p, c);//parent 상속 받기 때문에 멤버변수 및 함수를 그대로 사용 가능
c.name = 'ala';
console.log(p,c);
c.hello();
p.hello();

/*
override 부모에서 구현된 함순아 변수가 자식에게서 똑같이 구현 시킨 것이 오버라이드 
자식이 만든 함수가 부모가 만든 것을 덮어 씌움 부모가 가지고 있지 않은 경우 자식이 추가를 하게됨
*/