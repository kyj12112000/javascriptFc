//객체 리터럴

const a = {};

console.log(a, typeof a);

const b = {
    name: 'mark'
};

console.log(b, typeof b);

const c = {
    name : 'mark',
    hello1(){
        console.log('hello1', this);//this.name 접근
    },
    hello2: function(){
        console.log('hello2', this);//this.name 접근
    },
    hello3: ()=>{
        console.log('hello3', this);//this.name을 접근 하지 못함 그래서 빈 객체
    }
};

c.hello1();
c.hello2();
c.hello3();