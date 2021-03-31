function hello1(){
    console.log('hello1');
}

hello1();
hello2();

function hello2(){
    console.log('hello2');
}
///선언만 먼저 올라가고 대입은 안됨 let은 hoisting 문제 없음 
age = 6;
console.log(age);

var age;

////
console.log(name);
name = 'mark';
console.log(name);
var name;