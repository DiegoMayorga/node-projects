const person = {
  name: "Diego",
  age: 24,
  greet() {
    console.log("Hi! I am " + this.name);
  },
};

// Sin las llaves, seria person.name o personData.name o X.name
// pero para evitar eso puedo destructurar.

const printName = ({ name }) => {
  console.log(name); // Diego
};

printName(person);

// Crea una constante con ambos valores de la persona.
const { name, age } = person;
console.log(name, age); // Diego 24

// Destructurando arreglos (seria con corchetes y no llaves)

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
