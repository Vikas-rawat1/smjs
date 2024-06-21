// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 25];
const sqrNumbers = numbers.map((num) => num * num);
console.log(sqrNumbers);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

const studentsGrade = (grade) =>
  grade >= 90
    ? "A"
    : grade >= 80
    ? "B"
    : grade >= 70
    ? "C"
    : grade >= 50
    ? "D"
    : "F";

console.log(studentsGrade(92));
console.log(studentsGrade(80));
console.log(studentsGrade(78));
console.log(studentsGrade(12));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
  companyName: "Toyota",
  model: "Camry",
  year: 2019,
};

const changeCarYear = (car, newYear) => {
  car.year = newYear;
};

changeCarYear(car, 2022);

const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = arrNumbers.filter(isPrime);
console.log(primeNumbers);

// Q5 -  State different use cases of map, filter and reduce functions.
// 🚀The map() method is used for creating a new array from an existing one

// 🚀The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array.

// 🚀The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing

const person = {
  name: "Vikas",
  address: {
    street: "123 Main St",
    city: "MadhyPradesh",
  },
  contact: {
    phone: "121-1234",
  },
};

const phoneNumber = person.contact?.phone;
console.log(phoneNumber);

const missingPhoneNumber = person.contact?.email;
console.log(missingPhoneNumber);
