//spread 기존 객체를 복사하고 추가적으로  값을 넣어줄때 사용
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime, // spread slime이 가지고 있는 정보를 가지고옴
    attribute: 'cute'
};

const purpleCuteSlime ={
    ...cuteSlime, //cute 슬라임 정보를 가져옴
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

console.log('배열----------------');
//배열에서 사용
const animals = ['개']

