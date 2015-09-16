// create array of numbers
var numbers = [1,2,3,4,5,6,7,8,9,10];

// create new variable and filter the numbers array by the function evenNumbers
var filtered = numbers.filter(evenNumbers);

// create function event numbers that filters the even numbers in the array
function evenNumbers (number) {
    return number % 2 == 0;
}

// print filtered result to console
console.log(filtered);
