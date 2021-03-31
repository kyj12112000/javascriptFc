// Promise 객체가 rejected 된 경우 처리를 위해 try catch 를 이용

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
            reject(new Error('reson')); //reject때 에러 객체를 만들어서 넘김
        }, ms);
    });
}

(async function main(){
    try{
        const ms = await p(1000); //await에서 p를 호출 해서 진행하다 reject가 1초 후에 발생
        console.log(`${ms}ms 후에 실행 됩니다.`);
    }catch(error){
        console.log(error);
    }
})();