let size = ["S", "M", "L", "XL", "XXL"]

let numbers = [24, 26, 28, 30, 32, 34, 36]

console.log(size)
console.log(typeof (size))          // Checking of Data-Types [Object]

console.log(numbers)
console.log(typeof (numbers))       // Checking of Data-Types [Object]

size.push("XXXL")                   // Adding the value at the End of Array
console.log(size)

numbers.pop()                       // Deleting the value at the End of Array
console.log(numbers)

size.unshift("XS")                  // Adding the value in the Beginning of Array
console.log(size)

numbers.shift()                     // Deleting the value in the Beginning of Array
console.log(numbers)