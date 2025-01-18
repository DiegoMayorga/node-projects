var name = "Diego";
var age = 25;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "The name is " +
    userName +
    ", the age is " +
    userAge +
    ` and the user ${userHasHobby ? "has " : "doesn't have "}` +
    "hobbies."
  );
}

user1 = summarizeUser("Diego", 25, true);

console.log(user1);
