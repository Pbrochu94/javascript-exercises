const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(arrObject) {
    arrObject.sort((person1,person2)=>(person1.yearOfDeath-person1.yearOfBirth) > (person2.yearOfDeath-person2.yearOfBirth)?1:-1)
    return arrObject.pop()
};

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
