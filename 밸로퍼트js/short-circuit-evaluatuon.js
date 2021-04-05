const namelessDog = {
    name : '뭉뭉이'
}

function getName(animal){
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다';
}

const name = getName(namelessDog);
console.log(name);

console.log(false || 'hello');
console.log('' || '이름없다');
console.log(null || '널이다~');
console.log(undefined || 'undefined다 ');
console.log(0 || '0이다');

console.log(1 || '안나온다');

//////////////////////////////////////////////
console.log('-----------------------------------------');
function calculateCircleArea(r){
    const radious = r || 1; //param 없을 시 기본값 셋팅
    return Math.PI * radious * radious;
}

const area = calculateCircleArea();
console.log(area);

console.log('-----------------------------------------');
function calculateCircleArea2(r = 1){
    return Math.PI * r * r;
}

const area2 = calculateCircleArea2();
console.log(area2);

console.log('-----------------------------------------');
const calculateCircleArea3 = (r = 1)=>Math.PI * r * r;
const area3 = calculateCircleArea3();
console.log(area3);

