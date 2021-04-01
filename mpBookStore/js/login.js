function getToken(){
    return localStorage.getItem('token'); //string 이거나 null을 가져옴 
}

async function login(event){
    //하단에 이벤트리스너로 서브밋 되면 login 로직이 실행됨
    //인자로 event가 들어오게 되니깐 submit 흐름에 따라 진행 되려는 특성을 막아줘야함
    event.preventDefault(); //submit에 관련 된 로직이 작성한 이외에서 진행되지 않도록 막음
    event.stopPropagation(); //이벤트가 상위로 전달되지 않도록 막음

    const emailElement = document.querySelector('#email'); 
    const aa = document.querySelector('#email').value; 
    const passwordElement = document.querySelector('#password'); 
    //상단은 dom을 얻어옴 하단은 dom안에(input창안에) 있는 value를 가져옴
    const email = emailElement.value;
    const password = passwordElement.value;
    //얻어온 이메일과 패스워드를 서버에 보내서 문제 여부 체크
    try {   //첫번째는 주소 2번쨰는 보낼 객체
        const res = await axios.post('https://api.marktube.tv/v1/me', {//정상적으로 가면 res에 닮김
        email: email, password: password,
        });

        const {token} = res.data; // const token = res.data.token; 과 같은 의미 
        if(token == undefined){
            return; //다시 할수있도록 유도
        }
        localStorage.setItem('token',token);//토큰 이름에 실제 토큰을 넣어줌
        location.assign('/'); //로그인 상태에서 인덱스 페이지로 이동
    } catch(error){
         const data = error.response.data; //axios 언어
         if(data){
             const state = data.error;
             if(state == 'USER_NOT_EXIST'){
                 alert('사용자가 존재하지 않습니다.');
             } else if(state == 'PASSWORD_NOT_MATCH'){
                 alert('비밀번호가 틀렸습니다.');
             }
         }
    }
}

function bindLoginButton(){
    const form = document.querySelector('#form-login'); // form 돔을 얻어옴 
    //input data 전송 할수 있도록 form에서 submit을 호출 시 form이 submit이 실행 되서 
    form.addEventListener('submit', login); //submit 버튼 호출 시 login 로직 실행
}
function main(){
    // 버튼 이벤트 연결
    bindLoginButton();
    // 토큰 체크 로그인이 되어있으면 로그인 페이지에서 나가도록 유도
    const token = getToken();
    if(token != null){
        location.assign('/');
        return;
    }
}
document.addEventListener('DOMContentLoaded', main);// dom이 다 로드가 끝나면 실행 메인함수를 연결
