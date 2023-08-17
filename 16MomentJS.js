/* eslint-disable max-len */
// 16. Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами.
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

const moment = require('moment'); //! подключаю библиоткеу

module.exports = {
  formatDate(date) { //! Функция которая получает дату
    return moment(date).format('MMMM Do YYYY, h:mm:ss a'); //! возвращает дату в нужном формате
  },
};

//! Ниже прописан способ дла работы с данным модулем
// const dateUtils = require('./16MomentJS');

// const date = new Date();
// const formattedDate = dateUtils.formatDate(date);

// console.log(formattedDate); // example output: "August 15th 2023, 3:30:00 pm"
