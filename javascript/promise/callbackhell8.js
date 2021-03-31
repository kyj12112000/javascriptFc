/*
보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출한다
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안에서 진행된다.
*/

//비동기작업 콜백 -> 인자를 받은 callback을 넣게 된다 다음에 진행될 함수를 콜백에 인자를 넣은 후 작업이 끝나면 콜백 실행
// callbackhell : 함수가 아래로 진행되지 않고 콜백 안으로 중첩 해서 들어가서 들여씌기가 심하게 됨
function c(callback){
    setTimeout(()=>{
        callback();
    },1000)
}

c(()=>{
    //c가 끝나면 실행할 함수
    console.log('1000ms 후에 callback 함수가 실행됩니다.')
})
c(()=>{
    c(()=>{
        c(()=>{
            console.log('3000ms 후에 callback 함수가 실행됩니다.')
        })
    })
})

/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현 할수있다
then 에 함수를 넣는 여러 방법을 확인 해보자
*/

function p(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(); //executor 
        }, 1000);
    })
}

p().then(()=>{ //1초뒤에 여기
    return p(); //다시 새로운 promise 객체를 return해서 실행
}).then(()=>p()) // 2초뒤에 받고 실행
.then(p) // 3초뒤에 여기
.then(()=>{ //여긴 4초 자리
    console.log('4000ms 후에 fullfilled 됩니다.');
})