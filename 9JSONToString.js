/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable max-len */

// 9. Реализовать функцию конвертации JSON в строку

//! Первый способ решения
function json2str(json) { //! Объявляем функцию которая принимает в себя аргумент json
  if (!json || typeof json !== 'object') { //! проверяем не является ли json формата json или же не аругмент не типо объект
    return json; //! возвращаем аргумент json без каких либо изменений
  }

  const arr = []; //! Создаём массив куда в дальнейшем будим пушить строки по ключ значению
  for (const key in json) { //! Так как у нас json это объект используем цикл for in проходя по каждому ключу
    let value = json[key]; //! Записываем в переменную значение ключа
    if (value && typeof value === 'object') { //! проверям есть ли значение и если оно есть проверям является ли он объектом
      value = json2str(value); //! если значение является объектом рекурсивно вызываем функцию для этого объекта
    }
    arr.push(`${key}:${value}`); //! Пушим в массив результат в формате данных string как ключ:значение
  }

  return `${arr.join(', ')}`; //! Возвращаем строки при помощи ковычек и метода join() который соеденил массив в одну строку через , и пробел;
}

//! Пример использования:
const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const jsonString = json2str(obj); //! записываем результат выполнения функции с переданным в неё объектом в формате json
console.log(jsonString); // "{name:John, age:30, address:city:New York, country:USA}"

//! Второй способ решения

function jsonToString(obj) { //! Функция jsonToString рекурсивно обходит объект JSON и преобразует его в соответствующую строку. Она проверяет тип каждого элемента объекта и в зависимости от типа выполняет соответствующую операцию преобразования
  if (typeof obj === 'string') { //! проверка если пришедший аргумент тип данных строка через тайпоф проверим и сравним то
    return `"${obj.replace(/"/g, '\\"')}"`; //! Конвертирует пришедший json в строку
  } if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) { //! проверка на число или булевое значение или если null
    return String(obj); //! Конвертируем в строку при помощи обхекта String
  } if (Array.isArray(obj)) { //! Проверяем json является ли массивом
    return `[${obj.map(jsonToString).join(',')}]`; //! конвертируем элементы массива в элементы строк
  } if (typeof obj === 'object') { //! проверям объект ли
    const properties = Object.keys(obj) //! Используем метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in взят с mdn web docs
      .map((key) => `"${key}":${jsonToString(obj[key])}`) //! преобразуем ключ в строку и рекурсивно вызываем функцию jsonToString для значение и дальнейшего преобразования.
      .join(', '); //! соеднияем получившийся массив методом join() для лучшей читаемости через , и пробел
    return `${properties}`; //! возвращаем преобразованный объект
  }
}

const obj2 = { //! Объектом которые передадим для проверки функционала
  name: 'John',
  age: 25,
  hobbies: ['reading', 'singing', 'swimming'],
  address: {
    city: 'New York',
    state: 'NY',
  },
};

const jsonString2 = jsonToString(obj2);
console.log(jsonString2);
