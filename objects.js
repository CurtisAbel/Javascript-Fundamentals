// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName}${this.lastName}`
//   },
//   'phone number': '+3584545454545'
// }

// // accessing values using .
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// // value can be accessed using square bracket and key name
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])



// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city:'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki'
//   },
//   getPersonInfo: function() {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//   }
// }

// //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// //hasOwnProperty

// const copyPerson = Object.assign({}, person)
// console.log(copyPerson)

// const keys = Object.keys(copyPerson)
// console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address)
// console.log(address) //['street', 'pobox', 'city']

// const entries = Object.entries(copyPerson)
// console.log(entries)

// //hasOwnProperty: To check if a specific key or property exist in an object
// console.log(copyPerson.hasOwnProperty('name')) 
// console.log(copyPerson.hasOwnProperty('score'))
// console.log(copyPerson.hasOwnProperty('city'))

// for(const key in person){
//     console.log(key) 
// }

// const { 
//   age: { curtisAge }, 
//   age2: [, agetwo], 
//   firstName, 
//   lastName, 
//   ...otherInfo 
// } = {
//   age: { curtisAge: 25 },
//   age2: [25, 40],
//   firstName: "Oluwatobi",
//   lastName: "Sofela", 
//   companyName: "CodeSweetly",
//   profession: "Web Developer",
//   gender: "Male"
// };

// console.log(age2);

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

   for (const user in users){
    console.log(users[user]) 
   }

console.log(users['Alex']);
