/* executor의 reject 함수를 실행할때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있음
reject('error');
then((reson)=>{...})
*/

function p(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject('실패');
        },1000);
    });
}

p().then(message=>{
    console.log('1000ms 후에 fulfilled됨', message);
})
.catch(message=>{
    console.log('1000ms 후에 rejected 됩니다',message);
})