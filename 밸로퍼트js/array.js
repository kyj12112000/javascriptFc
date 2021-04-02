const array = [1,2,3,4,5,];
console.log(array);
console.log(array[1]); //배열 특정 원소 보는법

const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
];

console.log(objects);
console.log(objects[0]);
console.log(objects[0].name);
//배열 내장 함수로 push가 있음 추가함
objects.push({name :  '뭉뭉이'});
console.log(objects.length);

const array1 = [1, true, {a:1}, [1,2,3,4]];
console.log(array1);
array1.push(6);
console.log(array1);
array1.pop(1);
console.log(array1);