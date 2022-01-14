// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x', 'y','z']

function caesar(input, shift, encode = true) {
  //error handling
  if(!shift || shift === 0 || shift < -25 || shift > 25 || !input) return false;
  //adding the input to array so array functions can be used
  let inputArr = input.toLowerCase().split(''); //also makes all input lowercases so that will not throw any error even when block letters are inputted
  // console.log(inputArr);
  let finalSolution = [] //will be returned in the end
  // if(encode)

  if(!encode) shift = -shift //to decode this will be used. -shift do the opposite of what shift did.
  //finding indexnumber of each character inputted(inputArr) from the letters array.
inputArr.forEach((char)=>{ //loops through inputArr
  //finds index of each charatcer in input array
    const letterIndex = letters.indexOf(char) //finds index from letters array
    // console.log(letterIndex);
    //if any of the index is -1 then that character is pushed to the final array
    if(letterIndex === -1) return finalSolution.push(char); //-1 is returned when no match is found using indexOf()
    //if the letters array contain any of the characters then
    if(letters.includes(char)){ //if char is found in letters array
        let length = letters.length
        //if the shift inputted is greated than 0, we just add the shift to the index and if it is towards the end then wraps around to the front of the array ex. z goes to a and likewise
        //if the shift is going backwards then we goes backwards and wrap the process the opposite way
        //for example if it is an 'a' then 'z' is returned
        let shifting = shift > 0 ? ((letterIndex + shift) % length) : (((letterIndex + shift) % length + length) % length) 
        // console.log(shifting)
        //once shifting is done the letters in the index value is pushed to the final array
        finalSolution.push(letters[shifting]) //pushes the characters that are shifted and wrapped to the final solution. Here shifting holds the new index #.

    }
})
console.log(finalSolution.join(''))
//array is joined to give final string
return finalSolution.join('')


}

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
