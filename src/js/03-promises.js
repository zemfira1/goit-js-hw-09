//В HTML есть разметка формы, в поля которой пользователь будет 
//вводить первую задержку в миллисекундах, шаг увеличения задержки
// для каждого промиса после первого и количество промисов которое
// необходимо создать.

//Напиши скрипт, который при сабмите формы вызывает функцию 
//createPromise(position, delay) столько раз, сколько ввели в поле amount.
//При каждом вызове передай ей номер создаваемого промиса(position) и 
//задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).

//Дополни код функции createPromise так, чтобы она возвращала один промис,
// который выполянется или отклоняется через delay времени.Значением промиса
// должен быть объект, в котором будут свойства position и delay со значениями
// одноименных параметров.Используй начальный код функции для выбора того, 
//что нужно сделать с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay');
const stepInput = document.querySelector('.step');
const amountInput = document.querySelector('.amount');

form.addEventListener('submit', onSubmit);
  
function createPromise(position, delay) {  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(delayInput.value);
  let amount = Number(amountInput.value);
  let step = Number(stepInput.value);

  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay)
      .then(forThen)
      .catch(forCatch);
    delay +=step;
   }
};

function forThen({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { timeout: 5000 },);
}

function forCatch({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { timeout: 2000 },);
}



