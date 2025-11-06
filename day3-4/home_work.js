// Задание 1: .map()
const products = [
  { id: 1, title: "Ноутбук", price: 50000 },
  { id: 2, title: "Мышка", price: 1000 },
  { id: 3, title: "Клавиатура", price: 3000 },
];

// 1. Получите массив только названий товаров
// Результат: ["Ноутбук", "Мышка", "Клавиатура"]
const items = products.map((item) => item.title);

// 2. Создайте массив объектов с форматом { id, title, priceWithTax }
//    где priceWithTax = price * 1.18 (НДС 18%)
// Результат: [{ id: 1, title: "Ноутбук", priceWithTax: 59000 }, ...]
const formatProduct = (product) => {
  const { id, title, price } = product;
  const priceWithTax = price * 1.18;

  return { id, title, priceWithTax };
};
const formatedProucts = products.map(formatProduct);
// Решение из подсказки.
// const newPrice = products.map((p) => ({
//   id: p.id,
//   title: p.title,
//   priceWithTax: p.price * 1.18,
// }));

// 3. Преобразуйте в массив строк для вывода
//    Формат: "1. Ноутбук - 50000₽"
const newFormat = products.map((p, i) => `${i + 1}. ${p.title} - ${p.price}₽`);

// Задание 2: .filter()
const users = [
  { id: 1, name: "Иван", age: 25, status: "active" },
  { id: 2, name: "Анна", age: 17, status: "active" },
  { id: 3, name: "Петр", age: 30, status: "inactive" },
  { id: 4, name: "Мария", age: 22, status: "active" },
];

// 1. Получите всех активных пользователей
const active = users.filter((user) => user.status === "active");

// 2. Получите только взрослых пользователей (age >= 18)
const adult = users.filter((user) => user.age >= 18);

// 3. Получите активных взрослых пользователей
const activeAndAdult = users.filter(
  (user) => user.status === "active" && user.age >= 18
);

// 4. Удалите пользователя с id === 2
const deletUser = users.filter((user) => user.id !== 2);

// Задание 3: .reduce()
const numbers = [1, 2, 3, 4, 5];
// 1. Найдите сумму всех чисел
// Результат: 15
const totalSum = numbers.reduce((acc, num) => acc + num, 0);
// 2. Найдите произведение (1 * 2 * 3 * 4 * 5)
// Результат: 120
const totalMultiply = numbers.reduce((acc, num) => acc * num, 1);

const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "completed" },
  { id: 3, amount: 150, status: "cancelled" },
];

// 3. Подсчитайте общую сумму завершённых заказов
// Результат: 300
// const sumOrders = orders.reduce((acc, order) => {
//   if (order.status === "completed") {
//     acc = acc + order.amount;
//   }
//   return acc;
// }, 0);
// Более короткий вариант (используется чаще):
const sumOrders = orders.reduce((acc, order) => 
  order.status === "completed" ? acc + order.amount : acc, 0
);

// 4. Создайте объект с подсчётом статусов
// Результат: { completed: 2, cancelled: 1 }
const statusCount = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});

// Задание 4: .find()
const clients = [
  { id: 1, username: "ivan", email: "ivan@mail.ru" },
  { id: 2, username: "anna", email: "anna@mail.ru" },
  { id: 3, username: "petr", email: "petr@mail.ru" },
];

// 1. Найдите пользователя с id === 2
const findId = clients.find((user) => user.id === 2);
// 2. Найдите пользователя с email === "petr@mail.ru"
const findEmail = clients.find((user) => user.email === "petr@mail.ru");
// 3. Проверьте, существует ли пользователь с id === 10
//    Вывести: "Пользователь найден" или "Пользователь не найден"/
const checkUser = clients.find((user) => user.id === 1)
  ? "Пользователь найден"
  : "Пользователь не найден";
// 4. Найдите пользователя, чей email содержит "anna"
const findUser = clients.find(user => user.email.includes("anna"))
console.log(findUser)
// Задание 5: Комбинирование (Важное!)
const stuff = [
  {
    id: 1,
    title: "Ноутбук",
    price: 50000,
    inStock: true,
    category: "electronics",
  },
  {
    id: 2,
    title: "Мышка",
    price: 1000,
    inStock: true,
    category: "electronics",
  },
  { id: 3, title: "Книга", price: 500, inStock: false, category: "books" },
  {
    id: 4,
    title: "Клавиатура",
    price: 3000,
    inStock: true,
    category: "electronics",
  },
  {
    id: 5,
    title: "Наушники",
    price: 5000,
    inStock: true,
    category: "electronics",
  },
];

// 1. Получите названия товаров в наличии (inStock === true)
const prodInStock = stuff
  .filter((prod) => prod.inStock)
  .map((prod) => prod.title);
// 2. Получите общую стоимость электроники в наличии
const totalPriceInStock = stuff
  .filter((prod) => prod.inStock && prod.category === "electronics")
  .reduce((sum, prod) => sum + prod.price, 0);
// 3. Преобразуйте в массив вида:
//    [
//      { id: 1, title: "Ноутбук", price: 50000, discountPrice: 47500 },
//      ...
//    ]
//    где discountPrice = price * 0.95 (скидка 5%)
//    ТОЛЬКО для товаров в наличии
const discountPriceInStock = stuff
  .filter((prod) => prod.inStock)
  .map((prod) => ({
    id: prod.id,
    title: prod.title,
    price: prod.price,
    discountPrice: prod.price * 0.95,
  }));
// 4. Создайте JSON-строку с товарами, готовыми к продаже:
//    Получить товары: в наличии, категория "electronics", цена > 1000
//    Формат: { id, title, price }
//    Результат должен быть строкой JSON
const readyToSale = JSON.stringify(
  stuff
    .filter(
      (prod) =>
        prod.inStock && prod.category === "electronics" && prod.price > 1000
    )
    .map((prod) => ({ id: prod.id, title: prod.title, price: prod.price }))
);

// Задание 6: Практическое для React
// Симуляция данных с бэкенда
const comments = [
  { id: 1, userId: 1, text: "Отличный курс!", likes: 5, approved: true },
  { id: 2, userId: 2, text: "Спасибо за помощь", likes: 3, approved: true },
  { id: 3, userId: 1, text: "Помогите разобраться", likes: 1, approved: false },
  { id: 4, userId: 3, text: "Не работает код", likes: 2, approved: true },
  { id: 5, userId: 2, text: "Спам", likes: 0, approved: false },
];

const nameUsers = [
  { id: 1, username: "ivan" },
  { id: 2, username: "anna" },
  { id: 3, username: "petr" },
];

// 1. Получите одобренные комментарии
const approvedComments = comments.filter((comment) => comment.approved);
// 2. Добавьте к каждому одобренному комментарию username автора
//    Используйте .map() и .find()
//    Результат:
//    [
//      { id: 1, userId: 1, text: "Отличный курс!", likes: 5, approved: true, username: "ivan" },
//      ...
//    ]
const whithUserName = comments
  .filter((comment) => comment.approved)
  .map((comment) => ({
    ...comment,
    username: nameUsers.find((user) => user.id === comment.userId).username,
  }));
// 3. Посчитайте общее количество лайков одобренных комментариев
const totalLikes = comments
  .filter((comment) => comment.approved)
  .reduce((acc, comment) => (acc = acc + comment.likes), 0);
// 4. Найдите комментарий с наибольшим количеством лайков (среди одобренных)
const topComment = comments
  .filter((c) => c.approved)
  .reduce((top, current) => (current.likes > top.likes ? current : top));
