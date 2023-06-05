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

//import Notiflix from 'notiflix';

//____________________________________________________________________________
//Здравствуйте! Я запуталась совсем c этим заданием. Не выходит. Помогите, пожалуйста!
//_____________________________________________________________________________
const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay');
const stepInput = document.querySelector('.step');
const amountInput = document.querySelector('.amount');

form.addEventListener('submit', onSubmit);
  
function createPromise(position, delay) {  
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);

    return;
  });
}

function onSubmit(event) {
  event.preventDefault();
  let delay = delayInput.value;
  const amount = amountInput.value;
  const step = stepInput.value;

  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay).then(x => alert(x)).catch(y => alert(y));
    delay +=step;
  }
};






