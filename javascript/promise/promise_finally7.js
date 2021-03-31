/* fulfilled 되거나 reject 된 후에 최종적으로 실행할 것이 있다면, .finally()를 설정하고 함수를 인자로 넣음*/


function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('실패');
        }, 1000);
    });
}

p().then(message => {
        console.log('1000ms 후에 fulfilled됨', message);
    })
    .catch(message => {
        console.log('1000ms 후에 rejected 됩니다', message);
    }).finally(()=>{
        console.log('end');
    });