/* 
executor의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있다.
resolve('hello');
then((message)=>{...});
*/

function p(){
    return new Promise((resolve,reject)=>{
        /* pending */
        setTimeout(()=>{
            resolve('hello');
        },1000)
    })
}
/*비동기 작업은 원격에 데이터 가져올때 정상적으로 받아온 필요한 데이터를 then으로 넘겨서 준 후
ui를 만듦*/
p().then((message)=>{
    console.log('1000ms 후에 fullfilled됨',message);
}).catch(()=>{
    console.log('1000ms 후에 rejected 됨', message);
})

