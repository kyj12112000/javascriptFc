//shift 첫번째 배열 요소를 뺌
//shift 는 기존의 배열을 수정함
console.log("shift, unshift----------------")
const numbers = [10,20,30,40];
const value = numbers.shift(); 
console.log(value);
console.log(numbers);
//unshift 첫번째 배열 요소에 삽입
numbers.unshift(5);
console.log(numbers);
console.log("pop, push----------------")
//pop은 마지막을 뺌 
const numbers2 = [10,20,30,40];
const value2 = numbers2.pop();
console.log(value2);
console.log(numbers2);
//push 마지막 배열 요소에 삽입
numbers2.push(50);
console.log(numbers2);

console.log("concat----------------")
//concat 기존의 배열은 건드리지 않음
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concated = arr1.concat(arr2);
console.log(concated);

//join 
const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));