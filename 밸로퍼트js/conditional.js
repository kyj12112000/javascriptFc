const isAniaml = (text)=> ['고양이', '개', '거북이', '너구리'].includes(text);

// function isAnimal(text){
//     const animal = ['고양이', '개', '거북이', '너구리'];
//     return animal.includes(text);
// }

console.log('개');
console.log('노트북');
console.log('11--------------------------------------');

function makeSound(animal){
    const tasks = {
        개: () =>{
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        참새() {
            console.log('짹짹!');
        },
        비둘기: function(){
            console.log('구구!');
        },
    }
    const task = tasks[animal];
    if(!task){
        console.log('없다');
        return;
    }
    task();
}

makeSound('개');
makeSound('참새');
makeSound('비둘기');
makeSound('인간');

console.log('22--------------------------------------');
function getSound(animal){
    //if문 보단 객체 생성
    const sounds ={
        개: '멍멍!',
        고양이: '야옹!',
        참새: '짹짹!',
        비둘기: '구구!',
    };
    
    return sounds[animal] || '...?';
    // if(animal === '개') return '멍멍!';
    // if(animal === '고양이') return '야옹!';
    // if(animal === '참새') return '짹짹!';
    // if(animal === '비둘기') return '구구!';
    // return '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));