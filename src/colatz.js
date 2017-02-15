"use strict"
const colatz = num => {
  if(num === 1) return 0
  return num % 2 === 0 
    ? 1 + colatz(num / 2) 
    : 1 + colatz(num * 3 + 1)
}

module.exports = colatz