const summarizeUser = (userName, userGender, userAge, userHasHobby) => {
  let fstWord;
  let scnWord;
  let trdWord;

  if (
    userGender === "Male" ||
    userGender === "male" ||
    userGender === "M" ||
    userGender === "m"
  ) {
    fstWord = "His";
    scnWord = "He";
    trdWord = "he";
  } else if (
    userGender === "Felame" ||
    userGender === "felame" ||
    userGender === "F" ||
    userGender === "f"
  ) {
    fstWord = "Her";
    scnWord = "She";
    trdWord = "she";
  }
  return `${fstWord} name is ${userName}. ${scnWord} is ${userAge} years old and ${trdWord} ${
    userHasHobby ? "has " : "doesn't have "
  }hobbies.`;
};

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(summarizeUser("Diego", "m", 25, true));
console.log(summarizeUser("Nia", "f", 29, true));
console.log(add(1, 2));
console.log(addOne(5));
console.log(addRandom());
