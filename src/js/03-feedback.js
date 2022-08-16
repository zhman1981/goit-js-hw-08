import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const data = {};

const onFormInput = (evt) => {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('Email: ', JSON.parse(localStorage.getItem(STORAGE_KEY)).email);
    console.log('Message: ', JSON.parse(localStorage.getItem(STORAGE_KEY)).message);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

if (localStorage.getItem(STORAGE_KEY)) {
    input.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
    data.email = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    data.message = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
} 
form.addEventListener('input', throttle(onFormInput,500));
form.addEventListener('submit', onFormSubmit);