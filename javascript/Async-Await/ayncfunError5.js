//finally

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reson'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000); 
    console.log(`${ms} ms초 후에 실행됩니다.`);
    return 'Mark: ' + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(`${name}`); //Mark; 
    } catch (error) {
        console.log(error);
    } finally{
        console.log('end');
    }
})();