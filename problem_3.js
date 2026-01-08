// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false






const reverseFunc = (str)=>{
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return str == newStr;
    
}

console.log(reverseFunc("madam"));
console.log(reverseFunc("hello"));