/* eslint-disable max-len */

// 29.Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет определенные действия с этими данными,
// например, отправляет их на сервер или отображает всплывающее окно с результатами.

const myForm = document.querySelector('#myForm');

// Получить элементы формы, используя их id или другой идентификатор
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputMessage = document.getElementById('inputMessage');
const messeageAlert = () => {
  // Получить значения полей ввода
  const name = inputName.value;
  const email = inputEmail.value;
  const message = inputMessage.value;
  return alert(`Name: ${name}\n Email: ${email}\n Message: ${message}`);
};

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messeageAlert();
  inputName.value = '';
  inputEmail.value = '';
  inputMessage.value = '';
});
