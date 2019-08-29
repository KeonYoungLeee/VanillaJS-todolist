const form = document.querySelector('.js-form');
const input = form.querySelector('input');

const USER_LS = 'currentUser';

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {

    } else {

    }
}


const init = () => {
    loadName();
}

init();