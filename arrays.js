'strict'
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] 

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// console.log(numbers[1]);

// console.log(arr[3].city);

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)

// let myName = 'Christian';
// const charsInMyName = myName.split('');

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs)        // all the array items
// console.log(webTechs.length) // => to know the size of the array, which is 7
// console.log(webTechs[0])     //  -> HTML
// console.log(webTechs[6])     //  -> MongoDB

// let lastIndex = webTechs.length - 1
// console.log(webTechs[lastIndex]) // -> MongoDB

// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10      // changing 1 at index 0 to 10
// numbers[1] = 66      // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)

// countries[13]= 'Sweden' // Adding Sweden at index 13
// console.log(countries) // This will show undefined for index 11 and 12

// const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// console.log(fruitsAndVegetables)
//you can use concat to merge two or more arrays

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1
//find the index of an element in an array, also good to check if an element exists in an array

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.includes('Node'))  // true
// console.log(webTechs.includes('C'))     // false
// this method checks if an element exists in an array, returns true or false whereas indexOf returns the index of the element or -1 if not found

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
// //converts an array to a string, the elements are separated by commas

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// const numbers = [1,2,3,4,5]

//   console.log(numbers.slice().filter(item => item%2===0)) // -> it copies all  item
//   console.log(numbers.slice(0)) // -> it copies all  item
//   console.log(numbers.slice(0, numbers.length)) // it copies all  item
//   console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
//   let numbers = [1, 2, 3, 4, 5]
//   numbers = numbers.splice()
//   console.log(numbers)                // -> remove all items

//     const numbers2 = [1, 2, 3, 4, 5]
// 	numbers.splice(0,1)
//   console.log(numbers2)            // remove the first item

//     const numbers3 = [1, 2, 3, 4, 5, 6]
// 	numbers.splice(3, 3, 7, 8, 9)
//   console.log(numbers3.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]
// numbers.unshift(-1,-2, -3)
// console.log(numbers) // -> [-1,-2,-3,0,1,2,3,4,5];

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// webTechs.sort()
// console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse() // after sorting we can reverse it
// console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
// console.log(arrayOfArray[0]) // [1, 2, 3]

//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
//  console.log(fullStack[0][2]);


// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8, 9, 10];

// // numbers.push(...numbers2); // Merging two arrays using spread operator
// // console.log(numbers); // [1, 2, 3, 4, 5

// // numbers.splice(numbers.length,0,...numbers2); // Merging two arrays using splice
// // console.log(numbers); 

//  numbers2.push(...numbers);
//  console.log(numbers2); 

// numbers2.sort((a, b) => a - b); // Sorting the merged array in ascending order

// console.log(numbers2);

const numbers = [1, 2, 3, 1, 2];

const uniqueArray= numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

console.log(uniqueArray);






