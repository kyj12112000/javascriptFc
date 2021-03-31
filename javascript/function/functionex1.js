// function
// 이름 hello1 인 함수 선언
function hello1(){
    console.log("hello1");
}

console.log(hello1, typeof hello1);

function hello2(name){
    console.log('hlloe2',name);
}

function hello3(name) {
    return `hello3 ${name}`;
}


hello2('김');
console.log(hello3('김영재'));