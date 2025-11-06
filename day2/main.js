// День 2: Деструктуризация и Let/Const

// Правило большого пальца:
// Const по умолчанию — используйте для всего
// Let если нужно изменить — используйте редко
// Var никогда — забудьте, что это существует

// Правильно в React:
const user = {
  person: "Ivan",
  age: 25,
  city: "Moscow",
  kids: { boy: "Oleg", girl: "Sveta" },
};

const hobbies = {
  footbal: true,
  hockey: false,
};
const calculateAge = (birthYear) => 2025 - birthYear;
const numbers = [1, 2, 3];

// 2. Деструктуризация объектов
const { person, age, city } = user;

// Переименование при деструктуризации:
// const { person: firstName, age } = user;

// Значения по умолчанию:
// const { person, country = "Russia" } = user;

// Вложенная деструктуризация:
// const { person, kids: { boy } } = user;

// 3. Деструктуризация массивов

// Новый способ + пропуск элементов + значение по умолчанию

const colors = ["red", "green", "blue"];
// const [first, , third] = colors; //новый + пропуск
// const [first, second, third, fourth = "black"] = colors; // значение по умолчанию

// Rest оператор (остаток элементов):
const [first, ...rest] = colors;

// 4. Spread оператор (...)
// Копирование + объединение массивов

const copy = [...colors]; // копирование
const combined = [...colors, "pink", ...copy]; // объединение + добавление

// Копирование + объединение объектов

const userCopy = { ...user }; // копирование
const fullUser = { ...userCopy, ...hobbies }; // объединение

// Переопределение свойства + добавление нового
const copyHobbies = { ...hobbies, hockey: true, tennis: false };

// 5. Rest оператор (...)
// Rest в функциях
// Принятие неопределённого количества параметров:

const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

// Rest с первыми параметрами:
const printInfo = (person, age, ...hobbies) => {
  console.log(`${person}, ${age} лет`);
  console.log(`Хобби: ${hobbies.join(", ")}`);
};

printInfo(person, age, "footbal", "tennis");
