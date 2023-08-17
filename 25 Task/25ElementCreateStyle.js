/* eslint-disable max-len */

// 25. Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.
//! Используйте расширение Live Server для проверки работспособности

const mainBlock = document.querySelector('.mainBlock'); //! Блок куда буду добавлять элементы в DOM древо
const button = document.querySelector('.button'); //! Кнопка для обработчика событий для добавления

const newElem = () => { //! объяляю функцию
  const createElem = document.createElement('div'); //! создаю новый html элемент 
  createElem.classList.add('newElemBlock'); //! добавляю класс
  createElem.innerText = 'Созданный дочерний элемент mainBlock'; //! добавляю текст блоку
  createElem.style.display = 'flex'; //! задаю стиль дисплея
  createElem.style.width = '360px'; //! задаю ширину блока
  createElem.style.backgroundColor = '#9370db'; //! задаю задний фон блоку
  createElem.style.fontSize = '16px'; //! изменяю шрифт текста
  createElem.style.padding = '8px'; //! Делаю внутренние отступы в блоке для удобства чтение текста внутри блока
  return mainBlock.appendChild(createElem); //! при помощи appendChild добавляю новый блок в конец главного блока
};

button.addEventListener('click', () => { //! навещиваю на кнопку обработчик события
  newElem(); //! при клике вызываю функцию которая выполнится и вернёт добавленный элемент в конец главного блока
});
