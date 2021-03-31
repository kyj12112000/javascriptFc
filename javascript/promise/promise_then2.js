/*
then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해 
프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수(p) 실행과 동시에 then을 설정
*/


function p(){
    return  new Promise((resolve, reject)=>{
        /* pendding */
        setTimeout(()=>{
            console.log('1')
            resolve(); /* fulfilled로 넘어감 */
            console.log('2')

        }, 1000);
    });
}

//호출과 동시에 then을 설정
p().then(()=>{
    console.log('1000ms 후에 실행됨');
})

