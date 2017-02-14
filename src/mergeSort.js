"use strict";
const mergeSort = array => {
  if (!Array.isArray(array)) {
    return "Error: Input must be an array."
  }

  if(array.length < 2) {
    return array
  }
  console.log('prerecurse')
  const recurse = (arr) => {
    const center = Math.round(arr.length / 2)
    const firstHalf = arr.slice(0, center)
    const secondHalf = arr.slice(center, arr.length)
    
    if(firstHalf.length > 1) {
      recurse(firstHalf)
    }

    if(secondHalf.length > 1) {
      recurse(secondHalf)
    }
    console.log("halves::", firstHalf, '::::',secondHalf)

    let resultArray = []
    let i = 0
    let j = 0
    while(i < firstHalf.length && j < secondHalf.length) {
      if(firstHalf[i] < secondHalf[j]){
        resultArray.push(firstHalf[i += 1])
      } else {
        resultArray.push(secondHalf[i += 1])
      }
    }
    resultArray.concat(firstHalf.slice(i)).concat(secondHalf.slice(j))
    console.log('result', resultArray)
    return resultArray
  }

  return recurse(array)
}

mergeSort([3,1,4,2,7,6,5,9])

// module.exports(mergeSort)