// Remove duplicates from an array
// 📌 Input: [1,2,3,2,4,1] → Output: [1,2,3,4]
// function dublicateArr(arr){
//     let newArr = []
//     arr.sort()
//     for(let i=0; i<arr.length;i++){
//       if(arr[i+1] !==arr[i]){
//          newArr.push(arr[i])
//       }

//     }
//     return newArr
// }
// console.log(dublicateArr([1,2,3,2,4,1]))

// function SumAllTheNumber(arr,arr2){
//     let sum = arr.reduce((total,num)=>{
//         return total + num
//     },0)
//     let sum2 = arr2.reduce((total,num)=>{
//         return total + num
//     })
//     return sum + sum2
// }
// console.log(SumAllTheNumber([5, 10, 15],[1, 2, 3, 4, 5]))


// #############################################

// function Even(arr){
//     return arr.filter((item)=>{
//         return item%2==0
//     })
// }
// console.log(Even([2, 4 ,5 ,6 ,7 ,8]))

// . Double the values using map()
// 📌 Input: [1, 2, 3] → Output: [2, 4, 6]

// function Double(arr){
//     return arr.map(item => item*2)
// }
// console.log(Double([1, 2, 3]))

// ✅ Q5. Find the largest number
// 📌 Input: [10, 20, 30, 5] → Output: 30
// function LargestNum(arr){
//     let largeVValue = arr[0]
//    for(let i=1; i<arr.length; i++){
//      if(arr[i]>largeVValue){
//         largeVValue = arr[i]
//      }
//    }
//    console.log(largeVValue)
// }
// LargestNum([10, 20, 30, 5])

// ##################################
// Flatten a nested array (Interview Level)
// 📌 Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]
// function Flateen(arr){
//     let flatten  = []
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray([arr[i]])){
//             flatten = flatten.concat(Flateen(arr[i]))
//         }
//         else{
//            flatten.push(arr[i])
//         }
//     }
//     console.log(flatten)
// }
// Flateen([1, [2, [3, 4]], 5])
// You need to calculate total price, including 18% GST tax.
// const cartItems = [
//     { name: "Shampoo", price: 120, quantity: 2 },
//     { name: "Soap", price: 40, quantity: 3 },
//     { name: "Toothpaste", price: 60, quantity: 1 },
//   ];
  
//   function totalGst(arr){
//     let total = arr.reduce((total,num)=>{
//         return total + num.price
//     },0)
//     let gst = total * 0.18
//     return total + gst
//   }
//   console.log(totalGst(cartItems))

