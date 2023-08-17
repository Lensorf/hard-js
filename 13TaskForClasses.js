/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */

// 13. Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра.
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

//! Объявляем Базовый класс Shape
class Shape {
  calculateArea() {
    throw new Error('Метод calculateArea() должен быть переопределен');
  }

  calculatePerimeter() {
    throw new Error('Метод calculatePerimeter() должен быть переопределен');
  }
}

//! Подкласс Rectangle (прямоугольник) наследует базовый класс при помощи ключевого слова extends Shape и получает его методы
class Rectangle extends Shape {
  constructor(width, height) { //! В конструктор передаём в качестве аргументов width и heigth в данном методе можем инициализировать объект.
    super(); //! Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
    this.width = width; //! задаём ширину
    this.height = height; //! задаём высоту
  }

  calculateArea() { //! метода базового класса который вернёт нам площадь прямоугольника
    return this.width * this.height; //! вернём результат умножения ширины на высоту
  }

  calculatePerimeter() { //! метод базового класса который вернёт нам периметр прямоугольника
    return 2 * (this.width + this.height); //! вернём результат умножение на сумму высоты и ширины
  }
}

//! Подкласс Circle (круг) наследует базовый класс при помощи ключевого слова extends Shape и получает его методы
class Circle extends Shape {
  constructor(radius) { //! В конструктор передаём в качестве аргументов radius в данном методе можем инициализировать объект.
    super(); //! Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
    this.radius = radius; //! задаём значение ключу класса как значение переданное в аргументах в конструктор
  }

  calculateArea() { //! метода базового класса который вернёт нам площадь круга
    return Math.PI * this.radius ** 2; //! вернём результат возведение радиуса в степень 2 и умножим на метод Math.PI который представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159
  }

  calculatePerimeter() { //! метод базового класса который вернёт нам периметр круга
    return 2 * Math.PI * this.radius; //! вернём результат умножение 2 на Math.PI который представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159 и умноженое на радиус
  }
}

//! Подкласс Triangle (треугольник) наследует базовый класс при помощи ключевого слова extends Shape и получает его методы
class Triangle extends Shape {
  constructor(side1, side2, side3) { //! В конструктор передаём в качестве аргументов side1,side2,side3 три сторны треугольника в данном методе можем инициализировать объект.
    super(); //! Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
    this.side1 = side1; //! задаём значение ключу класса как значение переданное в аргументах в конструктор как side1
    this.side2 = side2; //! задаём значение ключу класса как значение переданное в аргументах в конструктор как side2
    this.side3 = side3; //! задаём значение ключу класса как значение переданное в аргументах в конструктор как side3
  }

  calculateArea() { //! метода базового класса который вернёт нам площадь круга
    const s = (this.side1 + this.side2 + this.side3) / 2; //! вычисляем полупериметр треугольника
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3)); //! для получения площади используем метод Math.sqrt который возвращает квадратный корень в нашем случае квадратный корен умножений разностей полупериметра сторон
  }

  calculatePerimeter() { //! метод базового класса который вернёт нам периметр круга
    return this.side1 + this.side2 + this.side3; //! возвращаем результат сложение трёх сторон треугольника это будет периметр
  }
}

//! Использование классов и методов для расчета площади и периметра фигур

const rectangle = new Rectangle(5, 10);
console.log('Прямоугольник:');
console.log('Площадь:', rectangle.calculateArea());
console.log('Периметр:', rectangle.calculatePerimeter());

// Круг с радиусом 7
const circle = new Circle(7);
console.log('\nКруг:');
console.log('Площадь:', circle.calculateArea());
console.log('Длина окружности:', circle.calculatePerimeter());

// Треугольник со сторонами 3, 4, 5
const triangle = new Triangle(3, 4, 5);
console.log('\nТреугольник:');
console.log('Площадь:', triangle.calculateArea());
console.log('Периметр:', triangle.calculatePerimeter());
