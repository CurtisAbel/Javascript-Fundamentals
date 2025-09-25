const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies);
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}

console.log(setOfCompanies);

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

companies.clear()
console.log(companies);

const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts);

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2

const duplicate = new Map();

const array = [1,1,2,2,3,3,3,4,5,5];

for(const num of array){
duplicate.set(num,(duplicate.get(num) || 0) + 1)
}

console.log(duplicate);
console.log(duplicate.get(3));


console.log( typeof typeof true);


// const arr = [1,2,3,4,5]
// const randomMap = new Map(arr);
// console.log(randomMap);

const phoneBook = ['brad', 'curtis', 'daniel', 'brad', 'jennifer', 'paul'];
const myMap = new Map();

for(let i = 0; i<phoneBook.length;i++){
  if(!myMap.has(phoneBook[i])){
    myMap.set(phoneBook[i], 1)

  }else{
    myMap.set(phoneBook[i], myMap.get(phoneBook[i]) + 1);
  }
}

console.log(myMap);
