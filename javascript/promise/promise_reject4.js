/* 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행*/

function p(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject();
        },1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfilled 실행됨')
}).catch(()=>{
    console.log('1000ms 후에 rejected 됨')
    //실패 시 catch를 잡아줘서 함수 실행해야함
});