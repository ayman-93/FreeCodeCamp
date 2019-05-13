//Right Answer
const telephoneCheck = str => {
  str = str.replace(/\s/g, "");
  return /^5\d\d-\d\d\d-\d\d\d\d$/.test(str) ||
    /^\d\d\d-\d\d\d-\d\d\d\d$/.test(str) ||
    /^1\(\d\d\d\) \d\d\d-\d\d\d\d$/.test(str) ||
    /^\d\d\d\d\d\d\d\d\d\d$/.test(str) ||
    /^\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str) ||
    /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str) ||
    /^1\d\d\d-\d\d\d-\d\d\d\d$/.test(str) ||
    /^1\d\d\d\d\d\d\d\d\d\d$/.test(str)
    ? true
    : false;
};

console.log(telephoneCheck("555-555-5555"), true);
console.log(telephoneCheck("1 456 789 4444"), true);
console.log(telephoneCheck("1 (555) 555-5555"), true);
console.log(telephoneCheck("555555555"), false);
console.log(telephoneCheck("1 555)555-5555"), false);

//testing
let n1 = "555-555-5555";
let n2 = "555-555-5555";
let n3 = "1 (555)555-5555";
let n4 = "5555555555";
let n5 = "555-555-5555";
let n6 = "(555)555-5555";
let n7 = "1(555)555-5555";
let n8 = "1 555-555-5555";
let n9 = "1 555 555 5555";
n9 = n9.replace(/\s/g, "");
console.log(/^5\d\d-\d\d\d-\d\d\d\d$/.test(n1));
console.log(/^1\d\d\d\d\d\d\d\d\d\d$/.test(n9));
console.log(/^\d\d\d-\d\d\d-\d\d\d\d$/.test(n2));
console.log(/^\d\d\d-\d\d\d-\d\d\d\d$/.test(n5));
console.log(/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(n3));
console.log(/^1\d\d\d-\d\d\d-\d\d\d\d$/.test(n8));
console.log(/^\d\d\d\d\d\d\d\d\d\d$/.test(n4));
console.log(/^\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(n6));
console.log(/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(n7));

// function telephoneCheck(str) {
//   // Good luck!
//   const firstStep = str.split('')

//   const numbers = firstStep.filter(n => +n == n && n !== ' ')
//   // console.log(numbers.length);
//   // console.log(numbers[0] !== '6');

//   if ((numbers.length !== 10 && numbers.length !== 11) || (numbers[0] !== '5' && numbers[0] !== '1')){
//     return false;}

//   console.log(str.split(''));

//   return true;
// }

//wrong
// const telephoneCheck = str => {
//   str = str
//     .replace(/\s/g, "")
//     .replace(/\-/g, "")
//     .replace(/\(/g, "")
//     .replace(/\)/g, "");
//   if (str[0] === "1" || str[0] === "5") {
//     if (str.length === 10 || str.length === 11) return true;
//     else return false;
//   } else return false;
// };
