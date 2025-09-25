const bracketTests = [
  "()",        // ✅ Balanced
  "(())",      // ✅ Balanced
  "(()())",    // ✅ Balanced
  "((()))",    // ✅ Balanced
  "(",         // ❌ Unbalanced
  ")",         // ❌ Unbalanced
  "())",       // ❌ Unbalanced
  "(()",       // ❌ Unbalanced
  "",          // ✅ Balanced (empty string)
];


// const isBalanced = brackets => {
//   let openBrackets = 0;
//   let closeBrackets = 0;
// for(let i = 0; i<brackets.length;i++){
//   if(closeBrackets > openBrackets) return false;

//   if(brackets.charAt(i) === '('){
//     openBrackets++;

//   } else {
//     closeBrackets++;
//   }
// }
// return openBrackets === closeBrackets;
// }

const isBalance = brackets => {
  const stack = [];
  const obj = {
    ')':'('
  }

  for(const c of brackets){
    if(obj[c]){
    if(stack.length > 0 && stack[stack.length-1]===obj[c]){
        stack.pop();
    }else{
    return false;
}
    }else{
        stack.push(c);
    }

  }
return stack.length === 0
}


for(const test of bracketTests){
  console.log(`test ${test}: ${isBalance(test)}`);
}