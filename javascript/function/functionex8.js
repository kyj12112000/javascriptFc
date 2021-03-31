// 함수를 호출하면 함수를 만들어서 리턴

function plus(base){
    return function(num){
        return base + num;
    }
}

const plus5 = plus(5);
console.log(plus5(10));
