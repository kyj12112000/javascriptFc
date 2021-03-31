const name = "mark";

console.log(name);

//var 함수 스코프
var a = 0;
(function(){
    a++;
    console.log(a);
})();
console.log(a);

