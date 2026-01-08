// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"




const reverseFunc = (str)=>{
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
    
}

console.log(reverseFunc("hello"));