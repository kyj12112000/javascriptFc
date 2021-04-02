const dog = {
    _name: '멍멍이',
    set name(value){// set할시 parameter는 항상 서렁
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
}
console.log(dog._name);
dog.name= '뭉뭉이';
console.log(dog._name);

////
// const numbers = {
//     _a: 1,
//     _b: 2,
//     sum: 3,
//     calcurate(){
//         this.sum = this._a + this._b;
//     },

//     get a(){
//         return this._a;
//     },
//     get b(){
//         return this._b;
//     },

//     set a(value){
//         this._a = value;
//         this.calcurate();//업데이트 해줌
//     },
//     set b(value){
//         this._b = value;
//         this.calcurate();//업데이트 해줌
//     }
// }
// console.log(numbers.sum);
// numbers.a = 5;
// console.log(numbers.sum);