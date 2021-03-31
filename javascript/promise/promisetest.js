function sitAndCode(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('sit and code')
        },1000)
    })
}

function eatLunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ear Lunch');
        },1000)   
    })
}

function goToBed(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('go to bed');
        }, 1000);
    })
}

sitAndCode().then((aa)=>{
    console.log(aa);
    return eatLunch
}).then((bb)=>{
    console.log(bb);
    return goToBed
}).then((cc)=>{
    console.log(cc);

})