const multiply = (a, b)  =>  {

    if(typeof b !== 'undefined'){

        return a*b;
    }else {

        return c => a*c
    }
}
const sum = (...args)  =>  {
    const sum = args.reduce((acc, curr) => acc+curr, 0)

    return c => sum+c;
}



const SumOfThreeNumbers = (a) => {
    return b => c => a+b+c
}


console.log(multiply(2,3));//6
console.log(multiply(2)(3));//6
console.log(multiply(2)(10));//20
console.log(SumOfThreeNumbers(1)(2)(3));//6
console.log(sum(1,2,4,5,6)(70));//7

const timesFour = multiply(4)

console.log(timesFour(4)); //16

const timesTen = multiply(10);
console.log(timesTen(40));

const sumOfSixNumbers = sum(1,2,3,4,5);

console.log(sumOfSixNumbers(7));
