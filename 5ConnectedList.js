/* eslint-disable no-console */
function jsonToLinkedList(json) { //! объявляем функцию которая принимает в себя 1 аргумент
  const data = JSON.parse(json); //! парсим принятый аргумент в переменную data

  //! Создаем объект, представляющий голову связного списка
  const head = {
    value: null, //! Значение
    next: null, //! Ссылка на следующий узел
  };

  let current = head; //! Устанавливаем начальный узел

  //! Проходим по каждому объекту в JSON
  data.forEach((obj) => {
    //! Создаем новый узел
    const newNode = {
      value: obj, //! Присваеваем значение узла и ссылку на следующий узел
      next: null,
    };
      //! Связываем текущий узел с новым узлом
    current.next = newNode;

    //! Перемещаем указатель текущего узла на новый узел
    current = newNode;
  });

  //! Возвращаем голову связного списка
  return head.next;
}

const json1 = '[{"name": "Alice"}, {"name": "Bob"}, {"name": "Charlie"}]';
const linkedList1 = jsonToLinkedList(json1);

console.log(linkedList1);

const json2 = '[10, 20, 30, 40, 50]';
const linkedList2 = jsonToLinkedList(json2);

console.log(linkedList2);

console.log(linkedList2.value);
// Ожидаемый результат: 10

console.log(linkedList2.next.value);
// Ожидаемый результат: 20

console.log(linkedList2.next.next.value);
// Ожидаемый результат: 30

console.log(linkedList2.next.next.next.value);
// Ожидаемый результат: 40

console.log(linkedList2.next.next.next.next.value);
// Ожидаемый результат: 50

console.log(linkedList2.next.next.next.next.next);
// Ожидаемый результат: null
