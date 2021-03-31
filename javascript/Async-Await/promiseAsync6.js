function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout((ms) => {
            resolve(ms);
        }, ms);
    });
}
//Promise 체이닝 느낌
p(1000)
    .then(() => p(1000)) //1초
    .then(() => p(1000)) //2초
    .then(() => { //3초
        console.log('3000ms 후에 실행');
    });
//async await

(async function main() { //1줄 비동기가 끝나야지 진행됨 한줄한줄과 순서가 맞음 
    await p(1000); // 1초후 정상적으로 처리후 진행 
    await p(1000); // 2초 후 진행
    await p(1000); // 3초 후 진행 총 3초 발생
    console.log('3000ms 후에 실행');
})();