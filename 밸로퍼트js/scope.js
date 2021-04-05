const value = 'hello';

function myFunction(){
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction(){
    console.log('orherFunction : ');
    const value = 'bye'; //함수형 스코프 
    console.log(value);
}

myFunction();
otherFunction();
console.log('global scope: ');
console.log(value);//글로벌 스코프

// var 키워드는 함수 전체를 함
//const or let은 블록 스코프
