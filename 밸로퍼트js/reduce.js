const numbers = [1,2,3,4,5];
let sum =0;
numbers.forEach(n=>{
    sum +=n
});
console.log(sum);
//reduce() accumulater, current
const sum2 = numbers.reduce((accumulater, current)=>accumulater + current,0);
//초기값 0이 accumulater가 됨 current 1 임 0+1 이 됨 1이 accumlater가 됨
//accumulater 1 crrunt 2 1+2 3 이 acuumulater가 됨
//accumlater 3 cuurent 3 3 +3 = 6이 acc
// acc 6 current 4 6+4 = 10이 acc
// 10 5 10+5 = 15
console.log(sum2);
console.log("----------------")

const numbers2 = [1,2,3,4,5];
//reduce를 사용 하여 배열의 평균 구하기
const avg = numbers2.reduce((accumulator, current, index, array)=>{
    if(index === array.length-1){
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
},0);

console.log(avg);

//current에 각 원소가 들어옴 
const alphabets = ['a','a','a','b','c','c','d','e']
const counts = alphabets.reduce((acc, current) =>{
    if(acc[current]){
        acc[current] += 1;
    }else{
        acc[current] = 1;
    }
    return acc;
},{});
// 뒤에 기본값이 0이라고 했는데 여기서는 비어있는 객체를 넣어줌

console.log(counts);