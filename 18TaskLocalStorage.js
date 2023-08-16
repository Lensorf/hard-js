/* eslint-disable func-names */ //! Ниже исключение для линтера
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-constant-condition */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
//! Первый вариант решения
const testKey = 'test'; //! создаём ключ для localStorage
let testData = ''; //! задаём пустую строку куда будем прибавлять "a" для проверки
for (let i = 0; i < 1024; i++) { //! цикл который будет идти до 1024 - 1 кбайт
  testData += 'a'; //! добавляем букву
}

try { //! используем конструкцию try catch для отлова ошибок
  const localStorageSize = function () { //! присваеваем результат выполнение анонимной функции переменной
    try { //! Снова конструкция трай кетч
      localStorage.removeItem(testKey); //! Удаляем прошлую итерацию по ключу
      localStorage.setItem(testKey, testData); //! Создаём новый итем по ключу с текущем значением "a" пока не заполним storage
      while (true) { //! цикл while будет выполняться пока true
        testData += testData; //! прибавляем по букве с каждой итерацией цикла
        localStorage.setItem(testKey, testData); //! и создаём итем по новой
      }
    } catch (e) { //! отлов ошибок где "e" аргумент ошибка
      localStorage.removeItem(testKey); //! удаляем итем
      return testData.length; //! возвращаем длину которая будет равна объему в байт
    }
  };
  //! просмотр в консоли объёма localStorage в байт кбайт и мбайт
  console.log(`Максимальный объем данных localStorage: ${localStorageSize()} байт.`);
  console.log(`Максимальный объем данных localStorage: ${localStorageSize() / 1024} кбайт.`);
  console.log(`Максимальный объем данных localStorage: ${(localStorageSize() / 1024) / 1024} мбайт.`);
} catch (e) {
  console.log('localStorage не поддерживается в вашем браузере.');
}

//! Второй вариант решения
function getMaxLocalStorageSize() { //! объявляем функцию которая не принимает в себя аргументов
  const testKey = 'test'; //! задаём будущий ключ
  let testData = 'a'; //! задаём будущее значение ключа

  try { //! конструкция try catch для отлова ошибок
    while (true) { //! цикл пока истинный true
      localStorage.setItem(testKey, testData); //! создаём новый итем по ключу и с новым текущим значением testData на данной итерации цикла
      testData += testData; //! изменяем значение для следующей итерации цикла
    }
  } catch (e) { //! отлавливаем ошибки
    localStorage.removeItem(testKey); //! удаляем итем по ключ
    return testData.length; //! возвращаем длину которая будет равна объему в байт
  }
}
//! просмотр в консоли объёма localStorage в байт кбайт и мбайт
console.log(`Максимальный объем данных в localStorage: ${getMaxLocalStorageSize()} байт`);
console.log(`Максимальный объем данных в localStorage: ${getMaxLocalStorageSize() / 1024} кбайт`);
console.log(`Максимальный объем данных в localStorage: ${(getMaxLocalStorageSize() / 1024) / 1024} мбайт`);
