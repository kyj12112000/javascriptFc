
function getToken(){
    return localStorage.getItem('token');
}

async function getUserByToken(token){
    try {
                                //뒤에는 get 이지만 headr에다 token값을 담아서 보내야함 서버의 정의된 것
        const res = await axios.get('https://api.marktube.tv/v1/me',{
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error){
        console.log('getUserByToken error', error);
        return null; //문제 있음 null로 넘어와서 아래 메인에서 localstorge clear함
    }
}

//event가 넘어오는데 설정 안해주면 ?가 넘어감
async function save(event){
    event.preventDefault()
    event.stopPropagation();
    console.log('save');

    event.target.classList.add('was-validated');// 부트스트랩기능 문제가 없으면 실행 있으면 경고표시

    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#title');
    const autorElement = document.querySelector('#title');
    const urlElement = document.querySelector('#title');

    const title = titleElement.value;
    const message = messageElement.value;
    const author = autorElement.value;
    const url = urlElement.value;
    //기본적인 유효 성 감사 해야함

    if(title == '' || message == '' || author == '' || url == ''){
        return;
    }

    const token = getToken();
    if(token == null){ //만약에 토큰이 사라졌을 수도 있으니 확인
        location.assign('/login.html');
        return;
    }
    //서버로 보내는 작업
    try {
        //post로 이 주소로 보내면 등록이 됨 //dom에서 얻은 밸류도 같이 전송
        //res로 진행 하는게 없기때문에 그냥 해도 됌
        // const res = await axios.post('https://api.marktube.tv/v1/book',{
        await axios.post('https://api.marktube.tv/v1/book',{
            title, 
            message, 
            author,
            url
        }, {
            headers:{
                //누가 보낸지 확인 하기 위해 토큰도 넣어줌 (증명의 용도)
                Authorization: `Bearer ${token}`
            },
        });
        location.assign('/'); //이상이 없으면 index페이지로 넘김
    } catch(error){
        console.log('save error', error);
        alert('책 추가 실패');
    }
}

function bindSaveButton(){
    const form = document.querySelector('#form-add-book');
    form.addEventListener('submit',save);//save 함수를 실행하는 이벤트
    
}

async function main(){
    // 버튼에 이벤트 연결
    bindSaveButton();
    // 토큰 체크
    const token = getToken();
    if(token == null){
        location.assign('/login.html');
        return; //더 실행할 필요 없으니 리턴
    }
    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if(user == null){ //만약 유저 정보가 널이면 재정비해줌
        localStorage.clear();
        location.assign('/login.html');
        return;
    }

    console.log(user);
}

document.addEventListener('DOMContentLoaded', main);