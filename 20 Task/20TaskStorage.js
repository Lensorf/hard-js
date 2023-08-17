/* eslint-disable max-len */

// 20.Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи.
// При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// localStorage.setItem('test', 'a'); //! для теста можно раскоментить
//! для проверки данных решений вместо деплоя использую Live Server в VS Code
function calculateLocalStorageSize() { //! объявляем функцию
  let totalSize = 0; //! переменная для хранения общего размера занимаемой памяти

  for (let i = 0; i < localStorage.length; i++) { //! цикл будет проходить по каждому ключу
    const key = localStorage.key(i); //! получаем ключ элемента
    const value = localStorage.getItem(key); //! получаем значение элемента
    const itemSize = key.length + value.length; //! считаем размер элемента (ключ + значение)
    totalSize += itemSize; //! прибавляем размер к общему размеру
  }

  const maxStorageSize = 1024 * 1024; //! максимальный размер хранилища в байтах, для примера установил 1 МБ = 1048576 байт

  console.log(`Занятая память: ${totalSize} байт / ${maxStorageSize} байт`);
}

//! При изменении данных в LocalStorage вызываем функцию calculateLocalStorageSize
window.addEventListener('storage', calculateLocalStorageSize());
