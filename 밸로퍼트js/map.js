const arry = [1,2,3,4,5,6,7,8,9,10];

// const squared = [];
// for(let i = 0; i<arry.length; i++){
//     squared.push(arry[i] * arry[i]);
// }

// arry.forEach(n=>{
//     squared.push(n*n);
// })
/////////////////////////////
// const square = n =>n*n;
// const squared = arry.map(square);
/////////////////////////////
const squared = arry.map(n=> n*n);
console.log(squared);

const items = [
    {
        id : 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];
////
// 객체 배열 text로만 이루어진 문자열 배열 출력 
const texts = items.map(item=> item.text);
console.log(texts);

//배열 자리 찾기
const superHeroes = ['아이언맨', '캡틴아메리카','토르','탁터스트레인지'];
const index = superHeroes.indexOf('토르');
console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,

    },
    {
        id: 2,
        text: '함수배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '내장함수 배우기',
        done: false,
    }
];
// find index = 객체배열에서 id가 3인 인덱스 찾기
const tod = todos.findIndex(todo => todo.id ===3);
console.log(tod);

// find = 객체배열에서 id 3인 객체 가져오기
const to = todos.find(todo=>todo.id ===3);
console.log(to);

//특정 배열 에서 filter 특정 조건들 찾기 
const tasksNotDone = todos.filter(todo=>todo.done === true);
console.log(tasksNotDone);