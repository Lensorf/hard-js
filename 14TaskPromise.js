/* eslint-disable no-console */
function loadImage(url) { //! объявляем функцию
  return new Promise((resolve, reject) => { //! возвращаем результат выполнения промиса
    const image = new Image(); //! Конструктор Image() создаёт новый экземпляр HTMLImageElement

    image.onload = () => { //! ждём окончания события загрузки
      resolve({ //! Выполняем промис если он не упал в ошибку
        width: image.width, //! ширина картинки
        height: image.height, //! высоты картинки
        src: url, //! путь до картинки
      });
    };

    image.onerror = () => { //! если же картинку не удалось загрузить
      reject(new Error(`Не удалось загрузить изображение: ${url}`)); //! возвращаем промис с ошибкой
    };

    image.src = url; //! путь до картинки который мы получили
  });
}

//! Пример использования работает в любом html документе при подключение данного скрипта

const imageUrl = 'https://happypik.ru/wp-content/uploads/2019/09/njashnye-kotiki8.jpg';

loadImage(imageUrl)
  .then((imageData) => {
    console.log('Изображение загружено:', imageData);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
