const fibonacci = function(number) {
    if(number == 0)
    {
        return 0;
    }
    if(number < 0)
    {
        return "OOPS"
    }
    number = Number(number);
    let array = [1];
    for (let i = 1;i<number;i++)
    {
        array.push(1);
        if(i >= 2)
        {
            array[i] = array[i-1]+array[i-2];
        }
    }
    return array.pop()
};

// Do not edit below this line
module.exports = fibonacci;
