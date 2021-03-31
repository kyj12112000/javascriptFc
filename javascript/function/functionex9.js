// 함수를 인자로 하여 함수를 호출

function hello(c){
    console.log('hello');
    c();
}

hello(function(){
    console.log('콜백');
});

function login(id, callback){
    if(id === 'kyj'){
        console.log(id + '로그인성공');
        
    }else{
        console.log(id + '가 아닙니다');
        
    }
}