/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
//! Объявляем функцию для преобразования
function convertToJSON(data) {
  if (typeof data !== 'string') { //! Проверка является ли строкой если нет выдаём ошибку
    throw new Error('Input must be a string');
  }

  //! Удаление пробелов в начале и конце строки
  data = data.trim();

  if (data === '') { //! Если передаём пустую строку выдаём ошибку
    throw new Error('Input string is empty');
  }

  let currentIndex = 0; //! Устанавливаем начальное значение индекса

  function parseValue() { //! Функция которая валидирует значение
    const char = data[currentIndex]; //! записываем в переменную то что в данный момент будет проходить проверку на валидацию

    if (char === '{') { //! Валидация объекта
      return parseObject();
    } if (char === '[') { //! Валидация массива
      return parseArray();
    } if (char === '"') { //! Валидация строки
      return parseString();
    } if (char === 't' || char === 'f') { //! Валидация булевого значения
      return parseBoolean();
    } if (char === 'n') { //! Валидация и првоерка на null
      return parseNull();
    } if (char === '-' || char.match(/[0-9]/)) { //! Валидация числа
      return parseNumber();
    } //! если ничего не подошло выдаём ошибку
    throw new Error('Invalid JSON value');
  }

  function parseObject() { //! Функция валидации объекта
    const obj = {};

    //! Пропуск открывающей фигурной скобки
    currentIndex++;

    while (currentIndex < data.length) { //! Цикл который будет проходить по значениям объекта и валидировать их
      //! Пропуск пробелов и запятых
      if (data[currentIndex] === ' ' || data[currentIndex] === ',') {
        currentIndex++;
        continue;
      }

      //! Проверка на закрывающую фигурную скобку
      if (data[currentIndex] === '}') {
        currentIndex++;
        return obj;
      }

      const key = parseString(); //! Парсим ключ в строку и проверяем ниже

      //! Пропуск пробелов и двоеточия
      if (data[currentIndex] !== ':') {
        throw new Error('Invalid JSON object');
      }
      currentIndex++;
      currentIndex++;

      const value = parseValue(); //! Парсим значение

      obj[key] = value; //! записываем в объект как ключ значение которые были провалидированы

      //! Пропуск пробелов и запятых
      if (data[currentIndex] === ' ' || data[currentIndex] === ',') {
        currentIndex++;
      }
    }
    //! Если ничего из этого выдаём ошибку
    throw new Error('Invalid JSON object');
  }

  function parseArray() { //! Вспомогательная функция для валидации массива
    const arr = [];

    //! Пропуск открывающей квадратной скобки
    currentIndex++;

    while (currentIndex < data.length) { //! Цикл для пропусков не нужных значений для валидации
      //! Пропуск пробелов и запятых
      if (data[currentIndex] === ' ' || data[currentIndex] === ',') {
        currentIndex++;
        continue;
      }

      //! Проверка на закрывающую квадратную скобку
      if (data[currentIndex] === ']') {
        currentIndex++;
        return arr;
      }

      const value = parseValue(); //! Валидируем значеие

      arr.push(value); //! Пушим в массив провалидрованное значение

      // Пропуск пробелов и запятых
      if (data[currentIndex] === ' ' || data[currentIndex] === ',') {
        currentIndex++;
      }
    }
    //! В случае если ничего не подходит выдаём ошибку
    throw new Error('Invalid JSON array');
  }

  function parseString() { //! Вспомогательная функция для валидации строк
    let str = '';
    let isEscaped = false;

    //! Пропуск открывающей кавычки
    currentIndex++;
    //! Цикл для прохода по строке
    while (currentIndex < data.length) {
      const char = data[currentIndex];

      if (isEscaped) { //! Проверка если тру выполняем одно из действий ниже с текующей строкой
        if (char === '"' || char === '\\' || char === '/') {
          str += char;
        } else if (char === 'b') { //! Если равно границе строки то
          str += '\b';
        } else if (char === 'f') { //! Для проверки на Backspace, Form Feed и Vertical Tab
          str += '\f';
        } else if (char === 'n') { //! Для проверки перевода строки
          str += '\n';
        } else if (char === 'r') { //! В текстовых файлах Windows для перевода строки используется комбинация символов \r\n
          str += '\r';
        } else if (char === 't') { //! Проверка на знак табуляции все методы для проверок взяты с https://learn.javascript.ru/
          str += '\t';
        } else { //! если ничего не подходит выдаём ошибку
          throw new Error('Invalid escaped character');
        }

        isEscaped = false; //! Задаём новое значение снова как ложное для последующих проверок
      } else {
        if (char === '"') { //! Новое условие если равно кавычком сдвинуть индекс на следующую итерацию и вернуть строку
          currentIndex++;
          return str;
        } if (char === '\\') { //! Если же нет то переводим значение в тру
          isEscaped = true;
        } else { //! если не тру записываем к текущей строке новую букву
          str += char;
        }
      }

      currentIndex++;
    }
    //! Если вообще ничего не подошло вернём ошибку
    throw new Error('Unterminated string');
  }

  function parseBoolean() { //! Вспомогательная функция для проверки булевого значение
    const boolStr = data.slice(currentIndex, currentIndex + 4);

    if (boolStr === 'true') { //! Если true то пропустить его и записать как булевое true без кавычек
      currentIndex += 4;
      return true;
    } if (boolStr === 'false') { //! Если false то пропустить его и записать как булевое false без кавычек
      currentIndex += 5;
      return false;
    }
    //! Если же не булевое значение вернуть ошибку
    throw new Error('Invalid JSON boolean');
  }

  function parseNull() { //! проверка на null
    const nullStr = data.slice(currentIndex, currentIndex + 4); //! получаем null как текст чтоб сравнить

    if (nullStr === 'null') { //! сравниваем и если null вернём как тип данных null а не string
      currentIndex += 4;
      return null;
    }
    //! ошибка если не равен null
    throw new Error('Invalid JSON null');
  }

  function parseNumber() { //! Валидируем цифры
    const start = currentIndex; //! начальное значение
    let numStr = ''; //! строка куда будем записывать цифры для валидации

    while (currentIndex < data.length) { //! цикл который будет проходить и записывать в строку цифры
      const char = data[currentIndex];

      if (char === '-' || char === '+' || char === '.' || char.match(/[0-9]/)) { //! проверка если - + или друбная точка или число записываем в строку
        numStr += char;
      } else { //! иначе прерываем текующую итерацию цикла
        break;
      }

      currentIndex++;
    }

    const num = Number(numStr); //! Приводим значение к числовом типу данных

    if (isNaN(num)) { //! Проверяем если является не числом вернём ошибку
      throw new Error('Invalid JSON number');
    }

    return num; //! если не NaN то вернём цифру в правильном значение и типе данных
  }

  return parseValue(); //! Возвращаем функцию валидации для проверок json
}

// Пример использования
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonString2 = '{"name": "John", "age": 30, "married": true, "hobbies": ["reading", 1], "address": {"street": "Main St", "city": "New York"}}';

try {
  const jsonObject = convertToJSON(jsonString);
  console.log(jsonObject);
} catch (error) {
  console.error(error);
}

try {
  const jsonObject = convertToJSON(jsonString2);
  console.log(jsonObject);
} catch (error) {
  console.error(error);
}
