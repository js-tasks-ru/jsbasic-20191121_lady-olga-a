## Допишите функцию валидации имени пользователя ##

Необходимо, чтобы на сайте можно было поприветствовать только пользователей,
которые удовлетворяют следующему условию - *имя не пустое, без пробелов, минимум 4 символа*.

```js
/**
 * Эту функцию трогать не нужно
 */
/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello('user');
```

