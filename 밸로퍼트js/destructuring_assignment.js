const object = {a:1};

//비구조 할당할때 = 사용 
const {a,b = 2} = object;
console.log(a);
console.log(b);

console.log(' 객체 비구조-------------------');

const animal ={
    name: '멍멍이',
    type: '개'
}
//객체 비구조 할당
//const nickname = animal.name 하고 싶을 경우
const {name : nickname} = animal;
console.log(nickname);
console.log(animal); //기존 구조는 건들지 않음

console.log(' 배열 비구조-------------------');

//배열 비구조 할당
const arr = [1];

const [one, two =2] = arr;
console.log(one);
console.log(two);

console.log(' 객체 깊숙한 값 비구조-------------------');
const deepObject = {
    state:{
        information:{
            name: 'velopert',
            language: ['korean', 'english', 'chinses']
        }
    },
    value: 5
}

// 방법 1
// const {name, language} = deepObject.state.information;
// const {value} = deepObject;

const {
    state :{
        information: {
            name, language
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    language,
    value
};
console.log(extracted);