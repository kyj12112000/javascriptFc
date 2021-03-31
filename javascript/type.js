let wharever = 'Mark';
console.log(wharever);

wharever = 37;
console.log(wharever);

wharever = true;
console.log(wharever);

/*기본타입 (Primitive values)
    Boolean, Null, Undefined, Number, String, Symbol(ECMAScript6에 추가됨)
객체(Object)
*/

const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);
console.log("----------");

const a = new Boolean(false);
console.log(a, typeof a ); //object type 사용하진 않음
console.log(" ");
const b = Boolean(false);
console.log(b,typeof b);