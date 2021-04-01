const numbers = {
    a:1,
    b:2,

    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.a = 5;
console.log(numbers);