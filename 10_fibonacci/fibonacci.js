const fibonacci = function(number) {
    let array = new Array(number)
    array.fill(1,0,(number))
    console.log(array)
    for (let i = 0;i<array.length;i++)
    {
        if(i >= 2)
        {
            array[i] = array[i-1]+array[i-2];
            console.log(array[i])
        }
    }
};

fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
