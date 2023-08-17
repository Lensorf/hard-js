/* eslint-disable max-len */
/* eslint-disable no-alert */

// 23. Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. Необходимо анализировать длину пароля,
// использование различных символов, наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

function analyzePassword(password) { //! объявляю функцию которая принимает в себя аргумент пароль
  //! Проверка длины пароля
  const lengthScore = password.length >= 8 ? 2 : 0; //! если пароль больше 8 присваеваем 2 если нет то 0

  //! Проверка наличия различных символов
  const characterScore = /[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]/.test(password) ? 2 : 0; //! если пароль содержит различные символы присваеваем 2 если нет то 0

  //! Проверка наличия чисел и букв в разных регистрах
  const digitScore = /[0-9]/.test(password) ? 1 : 0; //! так же как выше цифра есть присваеваем 1 если нет 0
  const lowercaseScore = /[a-z]/.test(password) ? 1 : 0; //! так же как выше строчная буква есть присваеваем 1 если нет 0
  const uppercaseScore = /[A-Z]/.test(password) ? 1 : 0; //! так же как выше заглавная буква есть присваеваем 1 если нет 0

  //! Вычисление общего результата
  const totalScore = lengthScore + characterScore + digitScore + lowercaseScore + uppercaseScore;

  //! Оценка сложности пароля и предложение улучшений если равно 5 сильный пароль равно 3 умеренный и если меньше 3 то проверим чего нету и предложим использовать
  if (totalScore >= 5) {
    return 'Сильный пароль';
  } if (totalScore >= 3) {
    return 'Умеренный пароль';
  }
  const improvements = [];
  if (lengthScore === 0) { //! проверка и вывод того что нужно сделать
    improvements.push('использовать пароль длиннее 8 символов');
  }
  if (characterScore === 0) { //! проверка и вывод того что нужно сделать
    improvements.push("использовать специальные символы (!@#$%^&*()_+=-[]{};':\"\\|,.<>/?])");
  }
  if (digitScore === 0) { //! проверка и вывод того что нужно сделать
    improvements.push('использовать цифры');
  }
  if (lowercaseScore === 0) { //! проверка и вывод того что нужно сделать
    improvements.push('использовать строчные буквы');
  }
  if (uppercaseScore === 0) { //! проверка и вывод того что нужно сделать
    improvements.push('использовать заглавные буквы');
  }
  return `Слабый пароль. Рекомендации: ${improvements.join(', ')}`; //! вернём напоминалку как усилить пароль.
}

//! пример использования
const password = document.querySelector('.inputPassword');
password.addEventListener('change', (e) => {
  const testPass = analyzePassword(e.target.value);
  alert(testPass);
  password.value = '';
});
