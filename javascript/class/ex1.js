//class 객체
//선언적 방식

class A {}
console.log(new A());

//class 표현식을 변수에 할당
const B = class {};

console.log(new B());

//선언적 방식이지만 호이스팅은 일어나지 않는다. 함수는 호이스팅때문에 가능 할수 있지만 클래스는 x 
// new C();
// class C {};