/* eslint-disable max-len */
// localStorage.setItem('test', 'a'); //! для теста можно раскоментить
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
