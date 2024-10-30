const palindromes = function (word) {
    let arr = word.toLowerCase().split("")
    let onlyLetters = arr.filter((letter)=>(/[a-zA-Z]/).test(letter))
    let reverseCounter = onlyLetters.length - 1
    for (let i =0;i<onlyLetters.length-1;i++)
    {
        if(onlyLetters[i] !== onlyLetters[reverseCounter- i])
        {
            return false;
        }
    }
    return true;
};

console.log(palindromes('r3ace3car'))
// Do not edit below this line
module.exports = palindromes;
