// new function(/*인자1, 인자2, ..., 함수의 바디*/);

const sum = new Function('a','b','c', 'return a + b + c');

console.log(sum(1, 2, 3));