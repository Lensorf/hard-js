/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable max-len */

// 24. Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.
// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// необходимо реализовать клиентскую пагинацию (50 элементов на странице)
//! для проверки данных решений вместо деплоя использую Live Server в VS Code

//! куда буду делать запрос за данными
const apiUrl = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
//! количество элементов на странице
const pageSize = 50;
//! массив где будут хранится текующие элементы страницы и для дальнейшего взаимодействия
let tableData = [];
function createTableRow(data) { //! Вспомогательная функция для заполнения таблицы принимает в себя однустроку из имени фамилии телефона адресса города штата индекса
  const {
    fname, lname, tel, address, city, state, zip,
  } = data; //! распарсиваем даты из пришедшего объекта date по ключам
  //! Создаём элементы в которые попадёт информация
  const row = document.createElement('tr');
  const fnameCell = document.createElement('td');
  const lnameCell = document.createElement('td');
  const telCell = document.createElement('td');
  const addressCell = document.createElement('td');
  const cityCell = document.createElement('td');
  const stateCell = document.createElement('td');
  const zipCell = document.createElement('td');
  //! Прокидываем информацию в созданные элементы
  fnameCell.innerText = fname;
  lnameCell.innerText = lname;
  telCell.innerText = tel;
  addressCell.innerText = address;
  cityCell.innerText = city;
  stateCell.innerText = state;
  zipCell.innerText = zip;
  //! Пушим в строку таблицы
  row.appendChild(fnameCell);
  row.appendChild(lnameCell);
  row.appendChild(telCell);
  row.appendChild(addressCell);
  row.appendChild(cityCell);
  row.appendChild(stateCell);
  row.appendChild(zipCell);

  return row; //! возвращаем строку для дальнейших действий дальше в рендере
}

function renderTableData(data) { //! функция рендера таблицы с полученным аргументом из запроса все данные пока не срезаем просто заполняем массив данными строками
  const tableBody = document.getElementById('data-body'); //! получаем тело таблицы куда будем пушить результат
  tableBody.innerHTML = ''; //! для начала обнуляем его

  data.forEach((item) => { //! При помощи метода массива forEach который проходит по массиву ничего не возвращая выполняем дейтсвия с каждым элементом массива
    const row = createTableRow(item); //! создаём строку при помощи вспомогательной функции
    tableBody.appendChild(row); //! пушим строки тело таблицы
  });
}

async function sortTable(columnIndex) { //! вспомогательная функция которая используется в самом html для сортировки по столбацам по возрастанию и убыванию
  const table = document.getElementById('data-table'); //! нахоидм всю таблицы
  const tableBody = document.getElementById('data-body'); //! находим тело таблицы
  const rows = Array.from(tableBody.getElementsByTagName('tr')); //! при помощи метода Array.from() создаём новый экземпляр Array из массивоподобного или итерируемого объекта. Взять с MDN

  const sortFunction = (a, b) => { //! сама функция сортировки
    const aValue = a.getElementsByTagName('td')[columnIndex].innerText; //! при помощи метода getElementsByTagName() возвращаем живую коллекцию элементов HTMLCollection , учитывая имя тэга
    const bValue = b.getElementsByTagName('td')[columnIndex].innerText; //! при помощи метода getElementsByTagName() возвращаем живую коллекцию элементов HTMLCollection , учитывая имя тэга

    return aValue.localeCompare(bValue); //! При помощи метода localeCompare() сравниваем строки и сортируем сначала от A-Z потом от Z-A. Пояснение про метод localeCompare() - возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.
  };

  rows.sort(sortFunction); //! прокидываем фунцию как калбек для удобства сортировки переменной rows
  if (table.dataset.sortedBy === columnIndex.toString()) { //! Если атрибут dataset.sortedBy равен индексу то сортируем уже от большего к меньшему по началу атрибут равен 0. пояснение Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.
    rows.reverse(); //! метод массива reverse который изменяет искомый массив и переворачивает его
    table.dataset.sortedBy = ''; //! обнуляем датасет атрибут
  } else {
    table.dataset.sortedBy = columnIndex; //! если же не равен то мы присвоем ему значение и потом снова сортируем при новом клике так как они уже будут равны
  }

  tableBody.innerHTML = ''; //! вовремя сортировки очищаем таблицу и заного заполняем

  rows.forEach((row) => { //! заного заполняем массив таблицы в нужном порядке по сортировке
    tableBody.appendChild(row);
  });
}

async function renderPaginationButtons() { //! функция пагинации
  const paginationContainer = document.getElementById('pagination'); //! находим блок куда будем пушить кнопки для пагинации
  paginationContainer.innerHTML = ''; //! изначально очистим чтобы ничего лишнего не было

  const pageCount = Math.ceil(tableData.length / pageSize); //! посчитаем сколько кнопок понадобиться при помощи метода Math.ceil который округляет в большую степень

  for (let i = 1; i <= pageCount; i++) { //! цикл для создания кнопок количество итераций цикла равно количеству нужных нам страниц
    const button = document.createElement('button'); //! создаём кнопку
    button.classList.add('buttonPagination'); //! задаём класс кнопке для стилей
    button.innerText = i; //! указываем какой странице относится данная кнопка то есть на первой итерации это будет кнопка для первой страницы

    button.addEventListener('click', () => { //! навещиваем обработчик событий по клику
      const start = (i - 1) * pageSize; //! устанавливаем ограничение до 50 элоементов это будет стартовой точкой откуда будем срезать таблицу
      const end = start + pageSize; //! устанавливаем ограничение до 50 элемента это будет конечной точкой до откуда будем срезать таблицу
      const currentPageData = tableData.slice(start, end); //! используем метод slice() возвращает новый массив, содержащий копию части исходного массива. копия от старта до конца 50 элементов
      renderTableData(currentPageData); //! и заного отрисовываем таблицу
    });

    paginationContainer.appendChild(button); //! пушим кнопки в контейнер для пагинации
  }
}
const tableLoad = async () => { //! асинхронная функция для запроса к данным
  try { //! конструкция try catch для отлова ошибок apiUrl в начале ссылка на апи с данными
    const response = await fetch(apiUrl); //! отправляем фетч запрос который при помощи ключевого слова await будет дожидаться ответа и выполнения промиса который придёт в ответ с сервера
    tableData = await response.json(); //! распарсиваем данный и получаем массив объектов
    const initialPageData = tableData.slice(0, pageSize); //! получаем копию содержащаю часть исходного массива при помощи метода массива slice от 0 до 50 ограничение установленное в начале
    renderTableData(initialPageData); //! прокидываем данный в функцию для рендера таблицы
    renderPaginationButtons(); //! рендерим кнопки вызвов функцию
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error); //! Информация если произошла ошибка
  }
};

window.addEventListener('DOMContentLoaded', () => { //! навещиваем обработчик на всё окно на событие когда страница была загружена
  tableLoad(); //! запускам получение и отрисовку всеъ элементов страницы после того как страница была полностью загружена
});
