for(let i = 0; i<10; i++){
//continue = 특정 조건이 만족됬을때 다음 루프를 하라는 것임 2가 출력이 안됨
    if(i ===2) continue;
    console.log(i);
    //break = 특정 조건이 만족되엇을때 for문 종료
    if(i === 5) break;
}

function sumOf(numbers){
   let sum = 0;
   for(let i= 0; i<numbers.length; i++){
       sum += numbers[i];
   }
   return sum;
}
const result = sumOf([1,2,3,4,5]);
console.log(result);

function num(numbers){
    let arr = new Array();
    for(let i= 0; i<numbers.length; i++){
        if(numbers[i]>3){
            arr.push(numbers[i]);
        }
    }
    return arr;
    
}
const aa = num([1,2,3,4,5,6,7,8]);
console.log(aa);