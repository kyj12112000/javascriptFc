//Login Promise
//axios - 데이터를 처리하고 받아 올수 있는 라이브러리 
//주소하고 바디를 넣어서 처리가 가능함
axios.post('https://api.marktube.tv/vl/me',{
    email,
    password,
}).then(res=>{});

//Login Async-Await
const res = await axios.post('https://api.marktube.tv/vl/me',{
    email,
    password,
})