// // a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 2
// }
// // function that takes other function as a callback
// function cube(callback, n) {
//   return callback(n) * n
// }
// ​console.log(cube(callback, 3));

// Higher order function returning an other function
// const higherOrder = n => {
//   const doSomething = m => {
//     const doWhatEver = t => {
//       return 2 * n + 3 * m + t
//     }
//     return doWhatEver
//   }
//   return doSomething
// }
// console.log(higherOrder(2)(3)(10)) 

// function sayHello() {
//   console.log('Hello')
// }
// setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

// function sayHello() {
//   console.log('Hello')
// }
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s


//forEach method
let sum = 0;
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()));

//map method
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase);

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters);

//Reduce method

const sumReduce = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sumReduce)

//every method return boolean

const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr);

//find method
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age);

const result = names.find((name) => name.length > 7)
console.log(result);

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)

//findIndex method, Return the position of the first element which satisfies the condition

const result2 = names.findIndex((name) => name.length > 7)
console.log(result2) // 0

const age2 = ages.findIndex((age) => age < 20)
console.log(age2) // 5

//some method returns boolean
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
const areAllStr2 = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr2) // false

//sort method
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

 numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort((a, b) =>  a - b)

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort((a, b) => b - a)
console.log(numbers) //[100, 37, 9.81, 3.14]