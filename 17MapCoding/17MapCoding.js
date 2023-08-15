/* eslint-disable max-len */
/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
/* eslint-disable no-undef */
function initialize() { //! Объявляем функцию
  const addressInput = document.getElementById('addressInput'); //! Находим инпут с которого будем считывать значения
  const resultsSelect = document.getElementById('results'); //! Находим селект куда будем добавлять значения для выборки

  //! Создаем экземпляр объекта для работы с картой
  ymaps.ready(() => { //! ymaps ключевое слова для работы с yandex.map Выполняет переданную функцию, когда API и DOM готовы к использованию.
    //! Возвращает Promise объект, который подтверждается пространством имен API, либо отклоняется, если при загрузке произошла ошибка. За основу взята документация yandex.dev
    const suggestView = new ymaps.SuggestView(addressInput); //! Создаёт выпадающую панель с поисковыми подсказками и прикрепляет к HTML-элементу 

    //! Функция, выполняющая геокодирование
    function geocode(address) { //! объявление фукнции
      //! Запрашиваем координаты для заданного адреса
      if (address === '') { //! проверка если адрес пустой очистить селектед
        resultsSelect.innerHTML = ''; //! сама очистка
        resultsSelect.style.display = 'none'; //! прячем селектед
        return; //! не отправляем запрос если пустое поле
      }
      ymaps.geocode(address).then((res) => { //! Отправка запроса на геокодирование. ymaps.geocode - Обрабатывает запросы геокодирования. Результат запроса может быть представлен в формате JSON или в виде объекта GeoObjectCollection.
        //! Очищаем предыдущие результаты
        resultsSelect.innerHTML = '';

        //! Обрабатываем каждый найденный объект геокодирования
        res.geoObjects.each((geoObject) => {
          //! Создаем элемент списка для каждого результата
          const option = document.createElement('option');
          option.value = geoObject.getAddressLine();
          option.text = geoObject.getAddressLine();

          //! Добавляем элемент списка в выпадающий список результатов
          resultsSelect.appendChild(option);
        });

        //! Показываем выпадающий список с результатами
        resultsSelect.style.display = 'block';
      });
    }

    //! Функция дебоунсинга и защиты от троттлинга с использованием замыканий
    function debounce(fn, delay) { //! Объявление функции и передача в неё аргументов будет принимать результат геокодирования и задержку для таймера
      let timer; //! создание переменной таймера
      return function () { //! возвращаем таймер с результатом выполнения действий и задержкой
        clearTimeout(timer); //! очистка таймера
        timer = setTimeout(function () { //! создания таймера, вызова геокодирования и выставление задержки
          fn.apply(this, arguments); //! получение данных геокодирования
        }, delay); //! выставление задержки
      };
    }

    //! Привязываем обработчик события к полю ввода адреса с задержкой 1000 мс
    addressInput.addEventListener('input', debounce(() => { //! обработчик событий на поле ввода которвый вызывает функцию дебаунс передавая в неё аргументы для задержки и геокодирования
      const address = addressInput.value; //! задаём переменую значением из поля ввода
      geocode(address); //! передаём значение в функцию геокодирования
    }, 1000)); //! передаём задержку в функцию дебаунс
  });
}

//! Запускаем инициализацию при загрузке страницы
window.onload = initialize; //! onload событие завершение загрузки
