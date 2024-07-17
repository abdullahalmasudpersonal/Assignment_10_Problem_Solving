////Problem Solving:

//   1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const peoples = [
  { name: "Abdullah", age: 28, gender: "Male" },
  { name: "Nadia", age: 22, gender: "Female" },
  { name: "Tanvir", age: 22, gender: "Male" },
  { name: "Saki", age: 32, gender: "Male" },
  { name: "Humaira", age: 32, gender: "Female" },
  { name: "Sara", age: 25, gender: "Female" },
  { name: "Mahmud", age: 27, gender: "Male" },
  { name: "Mahmuda", age: 27, gender: "Female" },
];

function femaleFilterAndMapRemainingPeople(people) {
  return people
    .filter((person) => person.gender !== "Female")
    .map((person) => person.name);
}

const result = femaleFilterAndMapRemainingPeople(peoples);
console.log("Problem-No-01", result);

/* problem no 02 */
const books = [
  { title: "Boker Vetor Nodi", author: "Humayun Ahmed", year: 1990 },
  { title: "Putul Nacher Itikotha", author: "Manik Bandopadhyay", year: 1936 },
  { title: "Saatkahon", author: "Samaresh Majumdar", year: 1981 },
  { title: "Kobi", author: "Tarashankar Bandopadhyay", year: 1949 },
  { title: "Lalsalu", author: "Syed Waliullah", year: 1948 },
];

function getBookTitles(book) {
  return book.map((book) => book.title);
}

const titles = getBookTitles(books);
console.log("Problem-No-02", titles);

/* problem no 03 */

function square(number) {
  return number * number;
}

function double(number) {
  return number * 2;
}

function addFive(number) {
  return number + 5;
}

function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
}

const Ans = composedFunction(7);
console.log("Problem-No-03", Ans);

/* Problem no 04 */

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Fusion", year: 2013 },
  { make: "Chevrolet", model: "Malibu", year: 2017 },
  { make: "BMW", model: "X5", year: 2020 },
];

function sortByYearAscending(cars) {
  cars.sort((car1, car2) => car1.year - car2.year);
  return cars;
}

const sortedCars = sortByYearAscending(cars);
console.log("Problem-No-04", sortedCars);

/* Problem no 05 */

const mans = [
  { name: "Abdullah", age: 28 },
  { name: "Nadia", age: 22 },
  { name: "Tanvir", age: 22 },
  { name: "Saki", age: 32 },
  { name: "Humaira", age: 32 },
  { name: "Sara", age: 25 },
  { name: "Mahmud", age: 27 },
  { name: "Mahmuda", age: 27 },
];

function findAndModifyPersonByName(mans, nameToFind, newAge) {
  const person = mans.find((person) => person.name === nameToFind);

  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name '${nameToFind}' not found.`);
  }

  return mans;
}

const updatedPeople = findAndModifyPersonByName(mans, "Mahmuda", 23);
console.log("Problem-No-05", updatedPeople);
