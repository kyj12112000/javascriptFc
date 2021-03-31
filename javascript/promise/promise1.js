/* 
Promise : 간단한 코드가 한줄한줄 순차적으로 사용 되면 상관이 없다
하지만 함수를 호출 했는데 끝나는 동안에도 프로그램이 진행되어야함 
이럴때 promise를 이용하면 비동기적인 상황에서 코드를 명확히 사용하고 실행 할수 있도록 한다.

new promise로 executor함수를 인자로 받아서 만들어 졌을때 펜딩으로 돌입 후 비동기적 상황이 발생한다.
일어나는 동안 펜딩 상태에서 비동기적 상황이 일어나는 동안 펜딩 유지 비동기 끝났을때 
fulfilled로 넘어가도록 resolve()를 호출
제대로 이행 안됬을 경우 error 일 경우 reject 를 호출 해서 rejected라는 상태로 만듬
*/
/*
생성자를 통해서 프로미스 객체를 만들 수 있다.
생성자의 인자로 executer 라는 함수를 이용한다.
*/

// new Promise(/*excutor*/);
/*
executor 함수는 resolve와 reject 를 인자로 가진다.
(resolve, reject) => {...}
resolve와 reject는 함수이다.
resolve(), reject()
*/

// new Promise(/*executor*/(resolve, reject)=>{});
/* 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기)상태임 */
/* executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다(실행이됬다)*/ 
//만드는 순간 pending로 돌입
// new Promise((resolve, reject)=>{
//     //
//     // ...
//     resolve(); //fulfilled 이행된 상태로 됨
// }); 
/* executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 됨 */
// new Promise((resolve,reject)=>{
//     reject(); // rejected 상태가 됨
// });

/* p라는 프로미스 객체를 만든 후 1000ms(1초) 후에 fullfilled로 변경*/
/* p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됨 */
const p = new Promise((resolve, reject)=>{
    /* pendding */
    setTimeout(()=>{
        resolve(); /* fulfilled로 넘어감 */
    }, 1000);
});
/* then이 받는 시점은 resolve() 가 fullfilled로 넘어가면  then에 넘어가서 아래에 함수가 실행됨 */
p.then(/* callback 작성구간*/()=>{
    console.log('1000ms 후에 fulfilled 됩니다');
    //프로그램이 시작된지 1초후에 fullfilled된 상태로 되면서 then안 callback 호출
})