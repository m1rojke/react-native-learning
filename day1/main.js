// Глобальные переменные для функций
const firstName = "Maksim";
const lastName = "Miroshnikov";
const age = 30;
// Урок 1. Arrow Functions (Стрелочные функции).

// Традиционная функция.
function sayHello(name) {
  return "Hello, " + name;
}

console.log(sayHello(firstName));

// Стрелочная функция(arrow).
const sayBye = (name) => {
  return "Bye, Bye " + name;
};

console.log(sayBye(firstName));

// Основные правила:
// Если один параметр - скобки необязательны: name => "Hello"
// Если нет параметров: () => "Hello"
// Если несколько параметров: (name, age) => "Hello"
// Если одна строка кода - return и фигурные скобки необязательны

//Без параметров.
const sayWhat = () => "What?";
console.log(sayWhat());

//Один параметр.
const totalNum = (num) => num + 2;
console.log(totalNum(4));

//Несколько параметров
const add = (a, b) => a + b;
console.log(add(2, 2));

//Многострочная функция
const calculateDiscount = (price, discount) => {
  const priceDisount = price * discount;
  return price - priceDisount;
};
console.log(calculateDiscount(100, 0.3));

// 2. Template Literals (Шаблонные строки)

// Старый способ.
const message = "Привет, меня зовут " + firstName + " и мне " + age + " лет.";

// Новый способ.
const responseMessage = `Привет, ${firstName}, я Tom и мне тоже ${age} лет.`;

// Возможности
// Многострочные строки
const text = `Дай мне ручку
я напишу альбом
Дай мне микрофон
я сделаю шоу`;

// Вычисления внутри строк.
const height = 10;
const weight = 30;
const square = `Площадь прямоугольника равна ${height * weight}.`;

// Вызов функции.
const getId = () => "id = '123123'";
const response = `Твой номер в сети ${getId()}`;

// Задание 1: Конвертируйте функции в arrow functions
// javascript
// Конвертируйте эти функции:
const multiply = (a, b) => a * b;

const isEven = (num) => num % 2 === 0;

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Задание 2: Используйте template literals
// javascript
// Перепишите используя template literals:
const city = "Санкт-Петербург";
const temperature = -5;
const weather = `Температура в ${city} составляет ${temperature} градусов`;

// Создайте функцию, которая принимает имя и возраст
// и возвращает строку: "Меня зовут [имя], мне [возраст] лет

const myInfo = (firstName, age) => `Меня зовут ${firstName}, мне ${age} лет.`;

// 1. Функция calculateAge принимает год рождения и возвращает возраст
// Пример: calculateAge(1998) → "Вам 27 лет"
const calculateAge = (bornDate, currentDate) => currentDate - bornDate;
console.log(calculateAge(1995, 2025));

// 2. Функция formatPrice принимает цену и валюту
// Пример: formatPrice(1500, "₽") → "Цена: 1500₽"
const formatPrice = (price, currency) => `Цена: ${price}${currency}`;
console.log(formatPrice(150, "₽"));

// 3. Функция createEmail принимает имя и домен
// Пример: createEmail("ivan", "mail.ru") → "ivan@mail.ru"
const createEmail = (localName, domenName) => `${localName}@${domenName}`;
console.log(createEmail("maksim", "mail.ru"));

// Создайте массив пользователей
const users = [
  { name: "Анна", age: 28, city: "Москва" },
  { name: "Петр", age: 35, city: "Санкт-Петербург" },
  { name: "Мария", age: 22, city: "Казань" },
];

// Используя arrow functions и template literals:
// 1. Создайте функцию getUserInfo, которая принимает пользователя
//    и возвращает строку: "Анна, 28 лет, город: Москва"
const getUserInfo = (user) =>
  `${user.name}, ${user.age} лет, город: ${user.city}`;

// 2. Примените эту функцию ко всем пользователям
//    используя метод .map()
const usersInfo = users.map((user) => getUserInfo(user));
// или короче:
const usersInfo1 = users.map(getUserInfo);

console.log(usersInfo);

//еще немного map() ?? не понимаю как это работает
const books = [
  { title: "React для начинающих", author: "Иван" },
  { title: "Глубокий JavaScript", author: "Анна" },
];

const getBooks = (book) => `Книга: ${book.title}, Автор: ${book.author}`;

console.log(books.map(getBooks));

const hello = (name) => `Hi, ${firstName || "гость"}!`;
console.log(hello());
