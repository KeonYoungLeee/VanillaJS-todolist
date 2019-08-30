const body = document.querySelector('body');
const IMG_NUMBER = 3;

const paintImage = (imgNumber) => {
    const image = new Image();
    image.src =`images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

const getRandom = () => {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

const BGInit = () => {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

BGInit();