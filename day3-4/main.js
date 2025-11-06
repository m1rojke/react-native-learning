// День 3-4: Продвинутый JavaScript - Array Methods
// 1. Array.map() - Преобразование массива
// Принцип работы:
const numbers = [1, 2, 4];
const result = numbers.map((num, index, array) => {
  console.log(`Индекс: ${index}, Значение: ${num}, Длинна? ${array}`);
  return num * 2;
});

// Преобразование массива объектов:
const users = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Анна" },
  { id: 3, name: "Петр" },
];
// Получить только имена
const names = users.map((user) => user.name);

// Преобразование типов данных:
const strings = ["10", "20", "30"];
const numberss = strings.map((str) => parseInt(str));

// 2. Array.filter() - Фильтрация массива
// Принцип работы:

// Функция должна вернуть true или false
// true → элемент добавляется в результат
// false → элемент пропускается
const usersi = [
  { name: "Иван", age: 25 },
  { name: "Анна", age: 17 },
  { name: "Петр", age: 30 },
];

const adults = usersi.filter((user) => user.age >= 18);
console.log(adults);

// Практические примеры
// Фильтрация по статусу:
const products = [
  { id: 1, name: "Ноутбук", inStock: true },
  { id: 2, name: "Мышка", inStock: false },
  { id: 3, name: "Клавиатура", inStock: true },
];

const available = products.filter((product) => product.inStock);
console.log(available);

// Поиск в массиве:
const words = ["JavaScript", "React", "Vue", "Angular", "Svelte"];
const searchTerm = "React";

const results = words.filter((word) =>
  word.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(results);

// Удаление элемента по ID:
const todos = [
  { id: 1, text: "Учить React" },
  { id: 2, text: "Сделать проект" },
  { id: 3, text: "Купить кофе" },
];

const idToDelete = 2;
const updated = todos.filter((todo) => todo.id !== idToDelete);

// 3. Array.reduce() - Свёртка массива
// Пример пошагово
const nmbers = [1, 2, 3];
const sum = nmbers.reduce((acc, num) => {
  console.log(`acc: ${acc}, num: ${num}`);
  return acc + num;
}, 0);

// Подсчёт суммы:
const purchases = [
  { name: "Ноутбук", price: 50000 },
  { name: "Мышка", price: 1000 },
  { name: "Клавиатура", price: 3000 },
];

const total = purchases.reduce((acc, num) => acc + num.price, 0);
console.log(total);

// Подсчёт количества:
const fruits = ["яблоко", "банан", "яблоко", "апельсин", "яблоко"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

// Группировка объектов:
const useres = [
  { name: "Иван", role: "admin" },
  { name: "Анна", role: "user" },
  { name: "Петр", role: "admin" },
  { name: "Мария", role: "user" },
  { name: "Морж", role: "animal" },
];

const grouped = useres.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user.name);
  return acc;
}, {});

console.log(grouped);

// Объединение массива объектов в один объект:
const data = [
  { key: "name", value: "Иван" },
  { key: "age", value: 25 },
  { key: "city", value: "Москва" },
];

const reesult = data.reduce((acc, item) => {
  acc[item.key] = item.value;
  return acc;
}, {});

console.log(reesult);

// 4. Array.find() - Поиск элемента
// Пример:
const numberrs = [1, 2, 3, 4, 5];
const found = numberrs.find((num) => num > 3);

// Поиск пользователя по ID:
const eusers = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Анна" },
  { id: 3, name: "Петр" },
];

const user = eusers.find((u) => u.id === 2);
console.log(user ? "YES" : "NOT");

// 5. Комбинирование методов (Chaining)
// Мощная комбинация методов:
const usersq = [
  { id: 1, name: "Иван", age: 25, active: true },
  { id: 2, name: "Анна", age: 17, active: false },
  { id: 3, name: "Петр", age: 30, active: true },
  { id: 4, name: "Мария", age: 22, active: true },
];
// Найти активных взрослых, получить их имена
const resulta = usersq
  .filter((user) => !user.active && user.age < 18) // Фильтруем
  .map((user) => user.name); // Преобразуем

console.log(resulta); // ["Иван", "Петр", "Мария"]

// Найти общую цену товаров, которые в наличии и дороже 1000
const items = [
  { name: "Ноутбук", price: 50000, inStock: true },
  { name: "Мышка", price: 500, inStock: true },
  { name: "Клавиатура", price: 3000, inStock: false },
  { name: "Монитор", price: 15000, inStock: true }
];

const totala = items
  .filter(item => item.inStock && item.price > 1000)
  .reduce((sum, item) => sum + item.price, 0);

console.log(totala); // 65000 (50000 + 15000)
