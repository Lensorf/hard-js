/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

// 27.Задача: Добавить анимацию для элемента:
// Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.


function animateElement(element, targetX, targetY, duration) { //! Объявляю функцию которая принимает в себя 4 аргумента: первый элемент для анимация, второй позиция по оси X, третий позиция по оси Y, duration - время за которое будет выполнена анимация
  element.style.position = 'relative'; //! задаю позиционирование чтобы было видно как сместился блок
  const startX = element.offsetLeft; //! задаём переменной начальное позиционирование блока слево
  const startY = element.offsetTop; //! задаём переменной начальное позиционирование блока сверху
  const distanceX = targetX - startX; //! вычисляем на сколько нам надо сдвинуть блок чтобы он встал в позицию переюданую в аргументе по оси X
  const distanceY = targetY - startY; //! вычисляем на сколько нам надо сдвинуть блок чтобы он встал в позицию переюданую в аргументе по оси Y
  const startTime = Date.now(); //! Получаем время Метод Date.now() возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

  function animationStep() { //! объявляем замкнутую функцию которая имеет доступ к внешним переменным
    const elapsedTime = Date.now() - startTime; //! получаем затраченное время на анимацию
    const progress = Math.min(elapsedTime / duration, 1); //! вычисляем время затраченное на данный момент времени и если оно равно 1 смотрим условие ниже

    element.style.left = `${startX + distanceX * progress}px`; //! производим сдвижение до нужной на позции по оси X
    element.style.top = `${startY + distanceY * progress}px`; //! производим сдвижение до нужной на позции по оси Y

    if (progress < 1) { //! если время не достигло 1 секунды выполняем действия
      requestAnimationFrame(animationStep); //! requestAnimationFrame - указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации
    }
  }

  requestAnimationFrame(animationStep); //! requestAnimationFrame запускает рекурсивную функцию animationStep для каждого шага анимации пока она не юудет закончена
}

//! пример использования
const element = document.querySelector('.myElement'); //! находим элемент для анимации
const button = document.querySelector('.button'); //! кнопка для запуска анимации
button.addEventListener('click', () => { //! навещиваем на кнопку обработчик события на клик который запустит анимацию
  animateElement(element, 300, 200, 1000); //! Анимировать элемент `myElement` до позиции (300, 200) за 1 секунду
});
