import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonRef = document.querySelector("[type='submit']");
const formRef = document.querySelector('.form');

const delayInputRef = formRef.querySelector("[name='delay']");
const stepInputRef = formRef.querySelector("[name='step']");
const amountInputRef = formRef.querySelector("[name='amount']");

const labels = formRef.querySelectorAll('label');
labels.forEach(el => el.classList.add('new-class'));

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const delayValue = parseInt(form.delay.value);
  const stepValue = parseInt(form.step.value);
  const amountValue = parseInt(form.amount.value);

  for (let position = 0; position < amountValue; position += 1) {
    const delay = delayValue + stepValue * position;

    createPromise({ position, delay })
      .then(({ position, delay } = {}) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay } = {}) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
  }
}

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;

  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  };

  const promise = new Promise(executor);
  return promise;
}
