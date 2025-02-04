// SPREAD OPERATOR

const hobbies = ["Sports", "Cooking"];

const copiedArray = [...hobbies];
console.log(copiedArray);

const person = {
  name: "Diego",
  age: 24,
  greet() {
    console.log("Hi! I am " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

// REST OPERATOR

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
