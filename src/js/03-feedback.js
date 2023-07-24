import { keys } from '@vimeo/player';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

let feedbackFormState = {};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  feedbackFormState[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(feedbackFormState);
  feedbackFormState = {};
  localStorage.removeItem(STORAGE_KEY);
  evt.target.reset();
});

const onLoad = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    feedbackFormState = JSON.parse(data);
    Object.entries(feedbackFormState).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener('load', onLoad);
