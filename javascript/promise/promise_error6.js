/* 
reject 함수를 실행하며 rejected 되는 이유를 넘기는데 , 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만듦
*/

function p(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject(new Error('bad'));
        },1000);
    });
}

p().then(message=>{
    console.log('1000ms 후에 fulfilled됨', message);
})
.catch(error=>{
    console.log('1000ms 후에 rejected 됩니다',error);
})