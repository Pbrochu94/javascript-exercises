

const findTheOldest = function(arrObject) {
    arrObject.map((person)=>(person.yearOfDeath === undefined)?person["yearOfDeath"]= 2024:person.yearOfDeath)
    arrObject.sort((person1,person2)=>(person1.yearOfDeath-person1.yearOfBirth) > (person2.yearOfDeath-person2.yearOfBirth)?1:-1)
    return arrObject.pop()
};

// Do not edit below this line
module.exports = findTheOldest;
