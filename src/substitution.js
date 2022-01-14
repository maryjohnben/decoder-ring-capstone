// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let letters = 'abcdefghijklmnopqrstuvwxyz';

let letterArr = [...letters]; //letters added to an array
// console.log(letterArr);
// console.log(letterArr.indexOf('z'))

  function substitution(input, alphabet, encode = true) {

const inputArr = input.toLowerCase().split(''); //input is added to array and changed to lowercase
// console.log(inputArr);
//error handling
if(!alphabet || !input) return false; //if alphabet or input is missing it will return false
const alphabetArr = alphabet.toLowerCase().split(''); //alphabet is added to array and lowercased
// console.log(alphabetArr.length)
if(alphabetArr.length !== 26) return false; //if the alphabet argument is not exactly 26 characters long fasle is returned
//none of the characters in the alphabet can repeat. It needs to be unique
function testDuplicate(alphArr) { //a function to test any duplicates
    let eachAdded = []
    for(let i = 0; i < alphArr.length; i++){
        let value = alphArr[i]; //each of the characters in the array is looped one by one and it is stored here
        //if not negative 1 then there is duplicate
        //initially eachAdded is empty so retuns -1
        //then value is pushed in when the second value is created and pushed into eachAdded then both tha values are compared.
        //if any of the values is not unique then the index can be found.
        if(eachAdded.indexOf(value) !== -1) return true; //if true the the alphabet has repetitions
        eachAdded.push(value);
    }
    return false; //if false no repetitions
}
// console.log(testDuplicate(alphabetArr))
if (testDuplicate(alphabetArr) === true) return false; //if duplicate is present false is returned


let result = ''; //final message
let combinedArrEncode = [...letterArr,...alphabetArr] //both letters and alphabet arrays are combined to one array used in encoding
const combinedArrDecode = [...alphabetArr,...letterArr]; //same as above but in reverse order used in decoding
// console.log(combinedArr);
inputArr.forEach((input)=>{ //looping through each input

    if(encode){ //if encoding is true
        let initialIndex = letterArr.findIndex((letter)=>input === letter) //finds index if input matches the letters array
        if(initialIndex === -1) return result+=input //in case index cannot be found the input is added to the result as it is
        //as combined array has both letters and alphabet array, adding index found + 26 will yield the desired result
        return result += combinedArrEncode[initialIndex + 26]; 
        }

    if(!encode) { //when decoding
        let initialIndex = alphabetArr.findIndex((alpha)=>input === alpha) //finds index if input matches the alphabet array
        console.log(initialIndex);
        if(initialIndex === -1) return result+=input //in case index cannot be found the input is added to the result as it is
        //as combined array has both alphabet and letters array(order flipped from encoding), adding index found + 26 will yield the desired result
        return result += combinedArrDecode[initialIndex + 26];
    }
            // console.log(initialIndex);
            // console.log(initialIndex);

            // console.log(result);
})
console.log(result);
return result; //result array is returned with the string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
