const numbers = [10,20,30,40,50];

const doggy = {
    name: '멍멍이',
    sound : '멍멍',
    age: 2
};


for(let num of numbers){
    console.log(num);
}
//doggy에 있는 key 들이 key변수에 대입됨
for(let key in doggy){
    console.log(key);
}

// 템플릿리터럴로 key와 밸려 가져오기
for(let key in doggy){
    console.log(`${key} : ${doggy[key]}`);
}
// 배열 형태로 key value 값을 가져옴  2차배열느낌[['name', '멍멍이'],['sound','멍멍],['age',2]]
console.log(Object.entries(doggy));
//키값을 배열 형태로 받기
console.log(Object.keys(doggy)); //['name','sound', 'age']
//value 값을 배열 형태로 받기
console.log(Object.values(doggy)); //['멍멍이','멍멍', 2]