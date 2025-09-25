// function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// }

// console.log(generateFullName())
// console.log(generateFullName('David', 'Smith'))

// const calculateAge = (birthYear, currentYear = 2019)  => {
//   let age = currentYear - birthYear
//   return age
// }

// console.log('Age: ', calculateAge(1819))


const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819));

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon