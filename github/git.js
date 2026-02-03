// ==========================
// 1. VARIABLES
// ==========================
var a = 10;        // old way
let b = 20;        // block scoped
const c = 30;      // cannot be changed

// ==========================
// 2. DATA TYPES
// ==========================
let num = 5;
let str = "Hello";
let isTrue = true;
let nothing = null;
let notDefined;

// ==========================
// 3. OPERATORS
// ==========================
let sum = 10 + 5;
let diff = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;

// ==========================
// 4. CONDITIONALS
// ==========================
if (num > 3) {
  console.log("Greater than 3");
} else {
  console.log("Less than or equal to 3");
}

// ==========================
// 5. LOOPS
// ==========================
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// ==========================
// 6. FUNCTIONS
// ==========================
function add(x, y) {
  return x + y;
}

const multiply = (x, y) => x * y;

// ==========================
// 7. ARRAYS
// ==========================
let arr = [1, 2, 3, 4];

// Access
console.log(arr[0]);

// ==========================
// 8. ARRAY METHODS
// ==========================

// map → transforms array
let doubled = arr.map(n => n * 2);

// filter → selects elements
let even = arr.filter(n => n % 2 === 0);

// reduce → single value
let total = arr.reduce((sum, n) => sum + n, 0);

// forEach → loop through array
arr.forEach(n => console.log(n));

// ==========================
// 9. OBJECTS
// ==========================
let person = {
  name: "Sanskriti",
  age: 18,
  greet: function () {
    return "Hello";
  }
};

// Access object
console.log(person.name);
console.log(person.greet());

// ==========================
// 10. DESTRUCTURING
// ==========================
let { name, age } = person;

// ==========================
// 11. CLASSES
// ==========================
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  intro() {
    return `My name is ${this.name}`;
  }
}

let s1 = new Student("Aman", 101);
console.log(s1.intro());

// ==========================
// 12. SPREAD OPERATOR
// ==========================
let arr2 = [...arr, 5, 6];

let newPerson = { ...person, city: "Delhi" };


