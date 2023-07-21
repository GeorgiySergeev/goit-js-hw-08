import throttle from 'lodash.throttle';

//1.refs
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');


formEl.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const storageObject = { email: inputEl.value, message: messageEl.value };

  localStorage.setItem('feedback-form-state', JSON.stringify(storageObject));
}

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  evt.target.reset();
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load('feedback-form-state');
if (storageData) {
  inputEl.value = storageData.email;
  messageEl.value = storageData.message;
}
