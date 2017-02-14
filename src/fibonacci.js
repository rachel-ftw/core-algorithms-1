const fibonacci = num => {
  if(typeof num !== 'number') return "Error: please enter a number"
  if(num < 0) return "Error: please enter a positive number"
  if(num === 0) return 0
  if(num === 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

module.exports = {fibonacci}
