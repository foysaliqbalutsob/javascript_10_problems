// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const findMax = (arr)=>{
    let max= arr[0];
    // console.log(arr.length);
    // console.log(arr[1])
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([5, 1, 9, 3]));