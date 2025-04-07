// // #reverse a string
// function reverseString(str){
//     let reverseStr = ""
//    for(i=str.length-1;i>=0;i--){
//     reverseStr += str[i] 
//    }
//    console.log(reverseStr)
// }
//  reverseString("hello")


//palindrome 
// function palindrome(str){
//   let newStr = ""
//   for(let i=str.length-1;i>=0;i--){
//      newStr += str[i]  
//   }
//   if(newStr==str){
//     return "this is palindrome"
//   }
//   else{
//     return "this is not palindrome"
//   }
// }
// console.log(palindrome("jalaj"))


//find the maximum number 
// function findMax(array){
//     let max = array[0]
//     for(let i=1;i<array.length;i++){
//         if(array[i]>max){
//             max = array[i]
//         }
//     }
//     return max
// }
// console.log(findMax([10, 5, 20, 8]))

// Problem: Print numbers from 1 to 50.

// If a number is divisible by 3, print "Fizz".

// If it’s divisible by 5, print "Buzz".

// If it’s divisible by both, print "FizzBuzz".
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         console.log("Fizz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     }
//     else if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else{
      //     console.log(i)
// }

// }

// remove dublicates from array
// removeDuplicates([1, 2, 3, 2, 1, 4]) // Output: [1, 2, 3, 4]

function  removeDuplicates(arr){
     let i = 0;
     let j = i+1;
     arr.sort()
     while(i>j){
        if(arr[i]==arr[j]){
          
        }
     }
}