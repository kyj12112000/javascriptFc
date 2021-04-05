//spread는 특정 객체 배열 다른 객체나 배열을 퍼트리는 것이면
//rest는 퍼져 있는것을 모아 오는 것임
const purpleCuteSlime ={
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

//...rest 굳이 rest라고 이름ㅇ ㅏㄴ해도됨
const {color, ...cuteSlime} = purpleCuteSlime;
console.log(color);
console.log(cuteSlime); //color를 제외한 값이 들어옴 이름을 굳이 rest라고 안해도됨 이름 상관없음

const {attribute, ...slime} = cuteSlime;
console.log(slime); // attribute를 뺀 name만 남음
console.log(purpleCuteSlime);
console.log('-------------------------------');

//배열
const numbers = [0,1,2,3,4,5,6];

const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest); //one two를 제외한 나머지가 들어옴 rest를 맨 마지막에 써줌

console.log('함수 -----------------------------');

function sum(...rest){
    return rest.reduce((acc,current) => acc+current,0);
}
// function sum(a,b,c,d,e,f,g){
//     return a+b+c+d+e+f+g;
// }
// console.log(sum(1,2,3,4,5,6,7));
const number = [1,2,3,4,5,6,7,8];
console.log(sum(...number));


//parameter는 함수에서 받아오는값
function subtreact(x,y){
    return x-y;
}
//인자는 함수를 사용할떄 넣어 주는 값
const result = subtreact(1,2);