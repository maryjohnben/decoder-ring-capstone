// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const pSqr = [
    [ "a", "f", "l", "q", "v"],
    [ "b", "g","m","r","w"],
    [ "c", "h", "n", "s", "x"],
    [ "d", "(i/j)", "o", "t", "y"],
    [ "e", "k", "p", "u", "z"],
  ]; //a = 1, 1; b = 2, 1
  function polybius(input, encode = true) {
    //error handling
    if(!input) return false;
    if(!encode) { //to decode
    let inputArr = input.split(''); //input (number in this case) is added to array
// console.log(inputArr)
let result = '' //returns the final result
// if(arr.includes(' ')) result += ' '
let filteredArr = inputArr.filter((number)=>number !== ' ') //removes any spaces from input to check if input is even.
console.log(filteredArr)
console.log(filteredArr.length)
if(filteredArr.length % 2 !== 0) return false; //check to see if input is even numbers. As each letter represents a number pair the input needs to be even.
let pairedInput = []; //each pair of input is added here from the forEach loop
inputArr.forEach((num)=>{
    if(num === ' ') return result += ' '; //if any of the item in input array is a space then space is added to result
    if(pairedInput.length < 3) pairedInput.push(num);
    // console.log(pairedInput.push(num))
    if(pairedInput.length === 2) { //once the pairedInput array has a pair
            let one = pairedInput[0] //first number is called from pairedInput array
            //   console.log(one)
            let two = pairedInput[1]; //second number is called from pairedInput array
            // console.log(pairedInput)
            pairedInput = []; // empties array again so that new pairs can be added
            // console.log(pSqr[one - 1][two - 1])
              result += pSqr[one - 1][two - 1] //letters are added to the result.
              //one -1 and two -1 is used to accound for array index starting from 0. 
              //polybius square starts from 1 so we are subtracting 1 from the input to find the right letter from the array. ex. input 1 become 0.
        }
    })
    console.log(result)
    return result;
  }

if(encode){ //to encode
let encodeResult = ''; //returns the final encoded message
// console.log(result)
let letterArr = input.toLowerCase().split(''); //input is converted to all lowercase and placed into an array
// console.log(letterArr);
let eachInput = letterArr.forEach((content)=>{ //looping through the input
  if(content === 'i' || content === 'j') content = '(i/j)'  //as i and j shares the same number pairs we have to define it specifically so that the right result will be returned
  if(content === ' ') encodeResult += ' '; //if there is a space in the input then the space is added to the final result
  //in this case for loop will be better as both indexes are needed
    for(let i = 0; i < pSqr.length; i++){ //now looping through the pSqr array
        //checking if any of the array inside pSqr contains the input
        //if it does then the index + 1 (to compensate for the 0 index is added to the result)
      if(pSqr[i].includes(content)) encodeResult += i+1; 
        for(let j = 0; j < pSqr[i].length; j++){ //checking to see if any each array inside of pSqr contains the input to collect the index of the input inside of the array
           //if any of each individual array contain the input then that index is collected and added to the result and + 1 is added to compensate for the index 0
           //This will be the second number in the pair 
          if(pSqr[i][j].includes(content)) encodeResult +=j+1; 
        }
    }
    
})
console.log(encodeResult)
return `${encodeResult}`; //number is returned as string

  }
}
return {
  polybius,
};
})();


module.exports = { polybius: polybiusModule.polybius };
