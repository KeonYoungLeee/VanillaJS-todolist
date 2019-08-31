const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const BLOCK_LI = 'showing';

let toDos = [];

const deleteToDos = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // It eliminates the same thing
    // Do not delete if 'li' is different
    const cleanToDos = toDos.filter((todo)  => {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

const paintToDO = (text) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDos);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    console.log(li.getAttribute('id') > 0);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id:newId,
    };
    toDos.push(toDoObj);
    if (toDos.length > 0) {
        toDoList.classList.add(BLOCK_LI);
        toDoList.classList.contains('showing');
        toDoList.style.display = "block";
    }
    saveToDos();
}

const todohandlerSubmit = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value='';
   
}



const loadToDos =()=> {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(todo => {
            paintToDO(todo.text);
        });
    } 
}

const todoInit = () => {

    loadToDos();
    toDoForm.addEventListener('submit', todohandlerSubmit)
}

todoInit();