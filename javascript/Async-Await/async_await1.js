//Promise 객체를 리턴하는 함수

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);//then의 콜백으로 넘김
        }, ms);
    })
}

//Promise 객체를 이용해서 비동기 로직을 수행할 때
//then은 비동기가 끝나면 일어날 일
p(1000).then(ms=>{
    console.log(`${ms}ms 후에 실행 됩니다.`);
});

//Promise 객체를 리턴하는 함수를 await 로 호출 하는 방법
//then으로 연결하지않고 정상적으로 됐을때 ms가 리턴 값으로 옴
//실제로 비동기 처리로보냈지만 비동기 처리가 기다렸다 resolve 되면 인자값을 리턴해서 이어짐
//async 안에 함수에서 사용 해야함 없으면 await is only valid in async function error 발생

//함수를 호춯 해서 사용
async function main(){
    const ms = await p(1000); 
    console.log(`${ms}ms 후에 실행 됩니다.`)
}
main();

//함수를 만들자 마자 실행 되는 형태
(async function main(){
    const ms = await p(1000); 
    console.log(`${ms}ms 후에 실행 됩니다.`)
})();