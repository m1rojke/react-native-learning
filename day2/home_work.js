// Задание 1: Let и Const
// 1. Переделайте код, используя const и let:
let count = 0;
for (let i = 0; i < 3; i++) {
  count = count + i;
}

console.log(count);
// 2. Почему это может быть проблема в React?
// var это устаревший способ определения переменной

// Задание 2: Деструктуризация объектов
// Дан объект с информацией о товаре:
const product = {
  id: 1,
  title: "Ноутбук",
  price: 50000,
  discount: 10,
  inStock: true,
  specs: {
    cpu: "Intel i7",
    ram: 16,
  },
};
// 1. Деструктурируйте title, price и discount
// 2. Деструктурируйте cpu из вложенного specs
// 3. Используйте значение по умолчанию для свойства, которое не существует

const { title, price, discount } = product;
const {
  specs: { cpu },
} = product;
const { insurance = true } = product;

// Задание 3: Деструктуризация массивов
const colors = ["красный", "зелёный", "синий", "жёлтый"];
// 1. Деструктурируйте первый и третий цвет
// 2. Деструктурируйте первый цвет и остаток в переменную rest
// 3. Деструктурируйте с пропуском первого элемента

const [first, , third] = colors;
const [red, ...rest] = colors;
const [, ...last] = colors;

// Задание 4: Spread оператор
// 1. Скопируйте массив [1, 2, 3] в новый массив
const original = [1, 2, 3];
// 2. Объедините два массива через spread
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
// 3. Скопируйте объект и измените одно свойство
const user = { name: "Иван", age: 25, city: "Москва" };
// Нужно: скопировать user, но изменить age на 30

const originalCopy = [...original];
const combined = [...arr1, ...arr2];
const userCopy = { ...user, age: 30 };

// Задание 5: Rest оператор
// 1. Создайте функцию, которая принимает первый параметр
//    и неограниченное количество остальных
// 2. Функция должна вернуть строку:
//    "Первый: [параметр1], Остаток: [параметр2, параметр3...]"

// Пример вызова:
// printRest("hello", "world", "foo", "bar")
// Результат: "Первый: hello, Остаток: world,foo,bar"

const titel = (first, ...rest) => {
  console.log(`Первый: ${first}, Остаток: ${rest.join(" ")}.`);
};

titel("Hello", "The", "world", "is", "a", "beautiful", "place");

// Есть массив пользователей
const users = [
  {
    id: 1,
    name: "Иван",
    email: "ivan@mail.ru",
    status: "active",
    tags: ["admin", "developer"],
  },
  {
    id: 2,
    name: "Анна",
    email: "anna@mail.ru",
    status: "inactive",
    tags: ["user"],
  },
  {
    id: 3,
    name: "Петр",
    email: "petr@mail.ru",
    status: "active",
    tags: ["user", "moderator"],
  },
];

// Задание 6: Комбинированная задача (для React)
// 1. Создайте функцию formatUser, которая:
//    - Принимает объект пользователя
//    - Деструктурирует нужные данные
//    - Возвращает объект с форматом для вывода

// 2. Применяя .map() и spread, создайте новый массив
//    где каждый пользователь получит дополнительное поле status_label:
//    - Если status === "active" → "Активен"
//    - Если status === "inactive" → "Неактивен"

// Результат должен быть таким:
// [
//   { id: 1, name: "Иван", email: "ivan@mail.ru", status: "active", status_label: "Активен", tags: ["admin", "developer"] },
//   ...
// ]

const formatUser = (user) => {
  const { status } = user;
  const status_label = status === "active" ? "Активен" : "Неактивен";

  return { ...user, status_label };
};

const formatedUsers = users.map(formatUser);
console.log(formatedUsers);
