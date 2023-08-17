/* eslint-disable max-len */

// 22. Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

//! Мы можем вызвать функцию document.write() сколько угодно раз внутри другой функции document.write().
//! Максимальное количество вызовов функции document.write() внутри document.write() зависит от ограничений, накладываемых на размер стека вызовов JavaScript движком и ограничений браузера.
//! Результат будет отображаться в том порядке, в котором функции вызываются.
//! Для данного задания можно использовать решение из прошлой задачей с функцией рекурсии. И вызовем столько же раз сколько позволит бразуер до переполнение call stack
//! JavasScript интерпретируется и выполняется поэтапно. Когда встречается вызов document.write(), он добавляет переданный аргумент в текущее содержимое документа.
//! Если это вызов document.write() внутри другого вызова document.write(), то результаты дополнительных вызовов будут добавлены к тому результату, который уже был записан.
//! если мы вызовем функцию document.write() два раза подряд:
//! document.write("Hello ");
//! document.write(document.write("world!"));
//! То результат будет: "Hello world!". 
//! В первом вызове document.write("world!") второй вызов document.write() вернет undefined и его результат не будет отображаться.
//! Ниже я представил 64 вызова внутри друг друга для примера без аргументов и получил встраиваемый текст undefiend 64 раза так же тестировал вызвав боле 1200+ раз так же встраивал undefiend равное количество вызовов
document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write(document.write())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
