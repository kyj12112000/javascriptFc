/*
value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행
value 가 프로미스 객체면, resolve 된 then 메서들르 실행
value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행
*/

Promise.resolve(/* value */); // 2가지 방법 1 Promise 객체, 2 일반 값
Promise.resolve(new Promise((resolve, reject)=>{ //promise 객체임
    setTimeout(() => {
        resolve('foo');
    }, 1000);
})).then((data)=>{//then이 resolve된 직후 바로 실행
    console.log('프로미스 객체인 경우, resolve된 결과를 받아서 then이 실행 됨',data)
}); 

Promise.resolve('bar').then(data=>{
    console.log('then 메서드가 없는 경우, fullfilled 됨 ', data)
})

/* Promise.reject 를 사용하면 catch 로 연결된 rejected 상태로 변경됨 */
Promise.reject(/* value */);
Promise.reject(new Error('reson'))
.then(()=>{})
.catch(error=>{
    console.log(error);
})