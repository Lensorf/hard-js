/* eslint-disable no-console */
/* eslint-disable max-len */
const mathX = (function () { //! Реализация аналога библиотеки Math как функция с названиеме mathX
  // функция для вычисления N-го числа в ряду Фибоначчи
  // function fibonacci(n) { //! Объявляем фукнцию и принимаем 1 аргумент n который приходи из функции выше
  //   if (n <= 1) { //! Если число равно 1 или меньше возвращаем n
  //     return n; //! Возвращаем n
  //   }
  //   return fibonacci(n - 1) + fibonacci(n - 2); //! Если число не равно 1 и не меньше чем 1, возвращаем сумму результата рекурсии
  // }
  // функция для вычисления N-го числа в ряду Фибоначчи более оптимизированный вариант
  function fibonacci(n) { //! Объявляем фукнцию и принимаем 1 аргумент n который приходи из функции выше
    const memo = [0, 1]; //! Объявляем локальную переменную в которую записываем результат прошлых вычислений
    function fib(n) { //! Объявляем функцию которая будет замкнута внутри функции высшего порядка
      if (memo[n] != null) { //! Если результат прошлого вычисления неравен null то записываем результат последних вычислений в массив
        return memo[n]; //! Возвращаем результат последнее число в массиве вычислений чисел фибоначи
      }
      return memo[n] = fib(n - 1) + fib(n - 2); //! Получаем в memo[n] резульатат суммы рекурсии фибоначи где первый элемент предыдущее число второй элемент следующее число
    }
    return fib(n); // ! Замыкаем функцию фиб из которой возвращаем результат вычисления и возврщаем результат вычислений фибоначи
  }

  // функция для вычисления всех чисел в ряду Фибоначчи до числа N
  function fibonacciSequence(n) { //! Объявляем функцию которая принимает в себя 1 аргумент - n
    const sequence = [0, 1]; //! Объявляем изначальное значение массива чисел фибоначи где первый элемент массива предыдущее число и второй элемент следующее число
    for (let i = 2; i <= n; i++) { //! Тут начинаем цикл так как уже имееv 2 числа фибоначи начинаем с 2 и до n - число фибоначи которое передали
      sequence[i] = sequence[i - 2] + sequence[i - 1]; //! записываем результат вычисление в массив под индексем i
    }
    return sequence.slice(0, n + 1); //! используем метода массива slice который возвращает новый массив который где 0 индекс с которого вовзращаем копию и второй аргумент слайс вычисляет последнее индекс массива до которого возвращаем копию
  }

  function isPrime(number) { //! Вспомогательная функция принимает число для проверки является ли оно простым
    for (let i = 2; i < number; i++) { //! Начинаем цикл с 2 так как простое число всегда больше 1
      if (number % i === 0) { //! если число делится на i-итерацию без остатка то делаем следующее
        return false; //! возвращаем falseтак как просто число делится на 1 и на само себя значит уже не подходит
      }
    }
    return number > 1; //! возвращаем число если оно не выдало не одного совпадения получается что делится только на себя и на 1
  }

  // функция для вычисления N-го простого числа
  function primeNumber(n) { //! Объявление функции которая принимает 1 аргумент n
    let count = 0; //! первая итерация цикла
    let number = 2; //! число которое будем передавать для проверки в вспомогательную функцию
    while (count < n) { //! цикл while будет пересчитывать пока итерации не достигнут n числа не включая n
      if (isPrime(number)) { //! отправляем число в вспомогательную функцию для проверки
        count++; //! увеличиваем итерацию если число просто
      }
      number++; //! прибавляем по еденицы для поиска 5 простого числа
    }
    return number - 1; //! возвращаем последнее простое число
  }

  // функция для вычисления всех простых чисел до числа N
  function primeNumbers(n) { //! Объявляем функцию и передаём в неё 1 аргумент n
    const primes = []; //! создаём массив в который будем пушить результат
    for (let i = 2; i <= n; i++) { //! Цикл for которые начинает считать с цифры 2 так как простые числа больше 0 и не считая еденицу получаетя первая итерация начинается с цифры 2
      if (isPrime(i)) { //! Отправляем на проверку в вспомогательную функцию число и возвращаем из неё результат
        primes.push(i); //! Если получили простое число пушим его в конец массива методом массива push
      }
    }
    return primes; //! Возвращаем  массив простых чисел
  }

  // возвращаем объект с функциями
  return { //! Возвращаем функцию как объект с ключами по которым к ним можно получить доступ
    fibonacci,
    fibonacciSequence,
    primeNumber,
    primeNumbers,
  };
}());

console.log(mathX.fibonacci(5)); // 5
console.log(mathX.fibonacci(6)); // 8
console.log(mathX.fibonacciSequence(5)); // [0, 1, 1, 2, 3, 5]
console.log(mathX.fibonacciSequence(6)); // [0, 1, 1, 2, 3, 5, 8]
console.log(mathX.primeNumber(5)); // 11
console.log(mathX.primeNumber(6)); // 13
console.log(mathX.primeNumbers(10)); // [2, 3, 5, 7]
console.log(mathX.primeNumbers(12)); // [2, 3, 5, 7,11]