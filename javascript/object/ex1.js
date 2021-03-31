//생성자 함수

function A(){}
const a = new A();

console.log(a, typeof a);
console.log('a = ' +A());

//생성하면서 데이터 넣기
function B(name, age){
    console.log(name, age);
}

const b = new B(); //console에는 undifined가 찍힐 것임
const c = new B('kyj', 30);
console.log(B()); //undifined를 생성 한 후 출력 되고 함수 내용도 출력되어 2번이 출력됨
