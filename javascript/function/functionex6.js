// arrow 함수 

const hello1 = () => {
    console.log('hello1');
}
hello1();

const hello2 = name => {
    console.log('hello', name);
}
hello2('김영재');

const hello3 = (name,age) => {
    console.log('hello', name, age);
}
hello3('김영재',30);
//return 방법
const hello4 = (name) => {
    
    return `hello4 ${name}`
}
console.log(hello4('김영재'));


const hello5 = name => `hello5 ${name}`