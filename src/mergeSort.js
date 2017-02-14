export default function mergeSort(array) {
  if (!Array.isArray(array)) return "Error: Input must be an array."
  if(array.length <= 1) return array

  const center = Math.round(array.length / 2)
  const firstHalf = array.slice(0, center)
  const secondHalf = array.slice(center, array.length)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

const merge = (leftHalf, rightHalf) => {
  let resultArray = []

  while(leftHalf.length && rightHalf.length) {
    resultArray.push(
      leftHalf[0] < rightHalf[0] ? leftHalf.shift() : rightHalf.shift()
    )
  }

  while(leftHalf.length) {resultArray.push(leftHalf.shift())}
  while(rightHalf.length) {resultArray.push(rightHalf.shift())}

  return resultArray
}