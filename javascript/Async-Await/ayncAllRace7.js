function p(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(ms);
            reject(ms);
        }, ms);
    });
}
//Promise.all
// (async function main(){
//     const results = await Promise.all([p(1000),p(2000),p(3000)]); //all 배열관계
//     console.log(results);//3초후 배열이 출력됨
// })();

//Promise.race
(async function main(){
    const results = await Promise.race([p(1000),p(2000),p(3000)]); //all 배열관계
    console.log(results);//배열이 넘어 오는 것이 아니라 제일 빠른거 하나 가져옴
})();