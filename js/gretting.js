const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings')

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';
const GREETING_BT = 'greeting'

const form_ST = 'form';

const saveName = (text) => {
    localStorage.setItem(USER_LS, text)
}

const handlerSubmit = (event) => {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handlerSubmit);
    console.log('asd');
}


const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    form.classList.add(GREETING_BT);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}   

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


const init = () => {
    loadName();
}

init();