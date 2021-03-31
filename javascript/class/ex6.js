//static 변수, 함수 객체가 아니고 클래스의변수와 함수

class A {
    static age = 37; 
    static hello(){
        console.log(A.age);//static age에 접근할 경우 class 이름으로 A.age로 접근 new 가 아닌 class의 함수로 봄
    }
}
console.log(A, A.age); //class A{age:37}37
A.hello();

class B{
    age = 37;
    static hello(){
        console.log(this.age);
    }
}

console.log(B, B.age);
// B.hello();

class C{ //class 이름이 C가 아니라 static name 변수가 class 이름을 나타냄
    static name = '이 클래스의 이름을 C가 아니다.';
}

console.log(C);