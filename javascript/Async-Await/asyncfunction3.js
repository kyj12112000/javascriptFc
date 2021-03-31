//async function 에서 return 되는 값은 
//Promise.resolve 함수로 감싸서 리턴 된다.
//p라는 함수를 new Promise 해서 await 사용 했는데 앞에 
//async function를 호출 async 함수가 있는 것은 return 값을 promise.resolve 함수로 감싸서 return  
//값이 들어오면 바로 resolve 됨

function p(ms){
   return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reson'));
        }, ms);
    });
}

//아래는 resolve만 됨 
//async 키워드가 있어서 내부에 await 사용 가능 
//main 함수에서 asyncP가 호출 되면서 p(1000)에 걸려서 mark를 진행하지 않고 p()를 먼저 해결 
//p는 new Promise를 return하기 때문에 p함수에서 진행 후 return mark를 해줌
async function asyncP(){ 
    const ms = await p(1000); //--reject 일경우 asyncP에러 발생이 일어나면 main에서 trycatch로 잡음 아닐 경우 try사용
    console.log(`${ms} ms초 후에 실행됩니다.`); //후에 mark를 리턴 하고 main이 출력됨
    return 'Mark: ' + ms;//ms 받은 데이터를 같이 넘겨줌
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(`${name}`); //Mark; 
    }catch(error){
        console.log(error);

    }
})();
