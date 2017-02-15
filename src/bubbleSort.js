"use strict";
const bubbleSort = array => {
  if(!Array.isArray(array)) return 'Error: Please input an array'
  if(array.length <= 1) return array

  for(let i = 0; i < array.length; i++) {
    let swapsMade = 0
    for(let j = 1; j < array.length - i; j++) {
      if(array[j - 1] > array[j]){
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
        swapsMade += 1
      }
    }
    if(swapsMade === 0) {
      return array
    }
  }
}

let swap = (array, j) => {
  let temp = array[j]
  array[j] = array[j + 1]
  array[j + 1] = temp
}

bubbleSort([4,7,3,8,56,33,27,0,2])

bubbleSort([0,2,1,3,4,7,8,33,27,56])

module.exports = {bubbleSort}


