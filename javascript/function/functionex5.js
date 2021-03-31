global.a = 0; //전역변수
{
    const a = 1;
    const test = new Function('return a');

    console.log(test());
}

{
    const a = 2;
    const test = function(){
        return a;
    };

    console.log(test());
}