const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const paintToDO = (text) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = "❌";
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

const todohandlerSubmit = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value='';
   
}

const loadToDos =()=> {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    } 
}

const todoInit = () => {

    loadToDos();
    toDoForm.addEventListener('submit', todohandlerSubmit)
}

todoInit();