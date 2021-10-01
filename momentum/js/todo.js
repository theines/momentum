const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; //paint될 때마다 해당 배열에 추가할 것이다.

function saveToDos(){
    //todos라는 키값에 toDos배열의 값을 넣는 모습.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //로컬스토리지는 배열을 저장을 못해서 이렇게 stringify를 해줘야함. 
    
}


function deleteToDo(event){
    //console.log(event.target.parentElement); //이렇게 하면 어떤 버튼이 선택되었는지 알 수 있다.(부모요소 li 나옴)
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);//li 밑에 span 이라는 자식 두기
    li.appendChild(button);
    toDoList.appendChild(li);
}

const TODOLIST = "todolist";

function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newTodo = toDoInput.value; //비우기전에 변수에 값 저장
    toDoInput.value = ""; //값 비우기    
    toDos.push(newTodo); //toDos 배열에 추가
    paintToDo(newTodo); //값 그리는 곳으로 보내기
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에 저장된게 있다면 꺼내서 스트링을 live object로 바꿔준다. each item of the array가 function을 수행할 수 있도록.
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){ //savedToDos가 존재하면
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));//배열의 길이만큼 돌면서 화살표 함수를 실행시키는 모습.
    //매개변수(item)은 (event)처럼 자바스크립트가 제공하는걸로써 we can know which item of array is executing. 
}