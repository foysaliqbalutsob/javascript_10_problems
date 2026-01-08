const vowels = ['a', 'e', 'i', 'o', 'u'];

const vowelCount = (str) =>{
    let count = 0;
    for(let i =0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
        
    }
    return count;

}
console.log(vowelCount("Hello World"));