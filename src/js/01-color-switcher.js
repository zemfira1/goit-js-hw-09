
// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», 
//раз в секунду меняет цвет фона < body > на случайное значение 
//используя инлайн стиль.При нажатии на кнопку «Stop», 
//изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» 
//была не активна(disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const CHANGE_COLOR_INTERVAL = 1000;
let intervalId = null;

btnStart.addEventListener('click', onStart);

function onStart() {
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');

    intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, CHANGE_COLOR_INTERVAL);
} 

btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
});