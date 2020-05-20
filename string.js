const str1 = 'бабочки';
function string(str) {
    let b = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            b = b + str[i]
        }
    }
    return b;
}
console.log(string(str1));
console.log(string('абрикоса'));
const a = 'aabbbcccc'
const countLetters = (input) =>  {
    const c = {}
    for(let i = 0; i < input.length; i++) {
        const h = input[i];
        с[h] = c[h] ? c[h] + 1 : 1
    }
    return c;
}
const result1 = countLetters(a);   
console.log = (result1);

const str1 = 'бабочки';
function string(str) {
    let b = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            b = b + str[i]
        }
    }
    return b;
}
console.log(string(str1));
console.log(string('абрикоса'));
const a = 'aabbbcccc'
const countLetters = (input) =>  {
    const c = {}
    for(let i = 0; i < input.length; i++) {
        const h = input[i];
        с[h] = c[h] ? c[h] + 1 : 1
    }
    return c;
}
const result1 = countLetters(a);   
console.log = (result1);
let startString = 'Hello world';
function reverseString(input) {
     let result = '';
     for(let i = input.length - 1; i >= 0; i--) {
         result = result + input[i];
     }
     return result;
 }
 console.log(reverseString(startString));
 console.log(reverseString('abc'));