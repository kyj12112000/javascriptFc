const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}
;
const captionAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

//이것도 비구조할당
const {name} = ironMan;
console.log(name);

// function print(hero){
//     //객체 비구조화 할당, 객체 구조분해 문법
//     const {alias, name, actor} = hero;
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다` //template literal es6
//     console.log(text);
// }

function print({alias, name, actor}){
    //객체 비구조화 할당, 객체 구조분해 문법
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다` //template literal es6
    console.log(text);
}


print(ironMan);