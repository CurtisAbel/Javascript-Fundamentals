// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
});

// Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.length > 0) {
//       resolve(skills)
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 1000)
// })

// doPromise
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.log(error));

  // Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.includes('Node')) {
//       resolve('fullstack developer')
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// }).then(result => console.log(result))
//   .catch(error => console.error(error))

// const url = 'https://dog.ceo/api/breeds/list/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data

//     const {bulldog, hound, greyhound} = data.message
//         console.log(bulldog);
//         console.log(hound);
//         console.log(greyhound);

//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       const {bulldog, hound, greyhound} = data.message
//         console.log(bulldog);
//         console.log(hound);
//         console.log(greyhound);
//     } catch (error) {
//       console.error(error)
//     }
//   }
// fetchData();


const countriesAPI = 'https://restcountries.com/v3.1/name/mauritius' // countries api
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


const fetchData = async () => {
try{
    const response = await fetch(countriesAPI);
    const data = await response.json();
    const {name, capital, languages, population, area} = data[0];
    console.log(name.common, capital[0], languages['mfe'], population, area);
}  catch(error){
    console.error(error);
}
}
fetchData();

