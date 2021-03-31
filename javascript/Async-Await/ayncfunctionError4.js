//error의 전파

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reson'));
        }, ms);
    });
}

//P함수에서 thorw 된 error를 asyncP가 받음 
//아래 함수에 정상적처리를 원하면 try-catch로 처리
//아닐 경우 main 함수에서 asyncP 에러를 받고난 후 try catch로 에러를 잡음
async function asyncP() {
    const ms = await p(1000); //정상적으로 처리 하려면 여기서 try catch 처리 후 정상적으로 밑으로 흐르게함
    console.log(`${ms} ms초 후에 실행됩니다.`);
    return 'Mark: ' + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(`${name}`); //Mark; 
    } catch (error) {
        console.log(error);

    }
})();