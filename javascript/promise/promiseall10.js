/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all 을 실행하면, 배열의 모든 프로미스 객체들이 fulfileed 되었을때, 
then 의 함수가 실행됨 then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줌
*/

//Promise.all([프로미스 객체들]);

function p(ms){// ms인자를 받음 아래 promise all 호출에서 ms 를 setTimeout에 셋팅
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms);
    })
}
//p함수로 만들어낸 promise 객체들을 배열로 넣음
Promise.all([p(1000),p(2000),p(3000)]).then((message)=>{//resolve에서 ms를 then 인자값으로 전달
    console.log('모두 fulfilled된 이후에 실행됩니다.',message)
}) 