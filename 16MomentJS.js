const moment = require('moment');

module.exports = {
  formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  },
};

//! Ниже прописан способ дла работы с данным модулем
// const dateUtils = require('./16MomentJS');

// const date = new Date();
// const formattedDate = dateUtils.formatDate(date);

// console.log(formattedDate); // example output: "August 15th 2023, 3:30:00 pm"
