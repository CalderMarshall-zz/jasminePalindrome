
// function pizzBuzz(num){
//     for(let i=0;i<num;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
// }
//
// function fizzBuzz(num){
//     if (num === 3){
//         return `Fizz`;
//     }
//     else if (num === 5) {
//         return `Buzz`
//     }
//     else{
//         return num
//     }
// }
//
//
function palindromes(word) {
    // var letterCount = 0;
    // change to lowercase and move to array of characters
    let lowerWord = word.toLowerCase().match(/\w+/g).join('');
    console.log(lowerWord);
    let newString = lowerWord.split('').reverse().join('');

    if(lowerWord === newString) {
        return true;
    }else {
        return false;
    }
    // make new array to push reverse to
   //  let newArr = [];
   //     // push reverse to new array
   //     for (let j = lowerWord.length -1; j >= 0; j --){
   //         newArr.push(lowerWord[j])
   //     }
   // for(let i = 0; i < newArr.length; i ++){
   //        if (lowerWord[i] !== newArr[i]){
   //            letterCount += 1;
   //        }
   //        if (letterCount > 0){
   //            return false
   //        }
   //        else {
   //            return true
   //        }

   // }
}

palindromes("race car!");
