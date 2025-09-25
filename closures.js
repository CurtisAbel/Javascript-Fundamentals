// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// // const innerFunc = outerFunction()

// // console.log(innerFunc())
// // console.log(innerFunc())
// // console.log(innerFunc())
// console.log(outerFunction());

// const c = outerFunction()
// console.log(c());
// console.log(outerFunction().innerFunction);

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)


function sum(number){
let sum = 0;

function add(){
    sum+=number;
    return sum;
}

function subtract(){
    sum-=number;
    return sum;
}

function multiply(){
    sum*=number;
    return sum;
}

return {
add,
subtract,
multiply
} 
};

const c = sum(2);

console.log(c.add());
console.log(c.multiply());


const outer = () =>{
    let count = 0;
    const inner = () => {
        count++;
        return count;
        
    }
    return inner;
}

const inn = outer();
console.log(inn());
console.log(inn());
