"use strict";
const factorial = num => {
  if(typeof num !== "number") return "Error: Please input number"
  if(num < 1) return "Error: Number must be positive"
  
  return num === 1 ? num : num * factorial(num - 1)
}

module.exports = {factorial}
