/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
const add = (number1, number2) => {
    return number1 + number2;
}
const subtract = (number1, number2) => {
    return number1 - number2;
}
const multiply = (number1, number2) => {
    return number1 * number2;
}
const divide = (number1, number2) => {
    return number1 / number2;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers () {
    document.querySelector("#sum").value = add(+document.querySelector("#addend1").value, +document.querySelector("#addend2").value)
}


// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addButton = document.querySelector("#addNumbers")
const subtractButton = document.querySelector("#subtractNumbers")
const multiplyButton = document.querySelector("#multiplyNumbers")
const divideButton = document.querySelector("#divideNumbers")
addButton.addEventListener("click", addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtractNumbers = function() {
    document.querySelector("#difference").value = subtract(document.querySelector("#minuend").value, document.querySelector("#subtrahend").value)
}
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiplyNumbers = () => {
    document.querySelector("#product").value = multiply(document.querySelector("#factor1").value, document.querySelector("#factor2").value)
}
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divideNumbers = () => {
    document.querySelector("#quotient").value = divide(document.querySelector("#dividend").value, document.querySelector("#divisor").value)
}
// Step 9: Test all of the mathematical functionality of the task3.html page.
subtractButton.addEventListener("click", subtractNumbers)
multiplyButton.addEventListener("click", multiplyNumbers)
divideButton.addEventListener("click", divideNumbers)

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear()
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let sourceArray = Array(25).fill().map((el, i) => i+1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = sourceArray
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").innerHTML = sourceArray.filter(number => number % 2 == 1)
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").innerHTML = sourceArray.filter(number => number % 2 == 0)
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector("#sumOfArray").innerHTML = sourceArray.reduce((number, acc) => acc = number + acc)
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").innerHTML = sourceArray.map(number => number * 2)
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").innerHTML = sourceArray.map(number => number * 2).reduce((number, acc) => acc = number + acc)