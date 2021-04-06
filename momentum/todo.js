const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function filterFn(toDo){
    return toDo.id === 1
}

function deleteToDo(event){
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    //flilter된 li를 삭제 후 변경된 arr(cleanToDos를 toDos로 변경)
    //saveToDos함수를 통해 localStorage에 저장
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    //localStroge는 String만 저장 함으로 object를 String 으로 변환시켜줘야함
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue); 
    //아래는 submit후에 input창을 초기화시킴
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //위에 String으로 저장된 storage 를 json을 통해 object로 변환
        // 첫번째 방법
        const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.forEach(todo => {
        //     paintToDo(todo.text);
        // });

        //2번째 방법
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();