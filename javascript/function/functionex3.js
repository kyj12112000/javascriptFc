hello1();
hello2();
hello3();
function hello1(){ //특성상 함수를 먼저 올림 hoisting 같은 느낌
    console.log('h1');
}

var hello2 = function(){ //hello2 is not a fucntion
    console.log('hello2');
}

const hello3 = function(){ //hello3 is not defined 선언한적 없다고 나옴..
    console.log('hello3');
}