const findTheOldest = function (people) {
  let EldestPerson = { name: "", yearOfBirth: 0, yearOfDeath: 0, age: 0 };
  people.forEach((person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > EldestPerson.age) {
      EldestPerson = {
        name: person.name,
        yearOfBirth: person.yearOfBirth,
        yearOfDeath: person.yearOfDeath,
        age: age,
      };
    }
  });
  return EldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
