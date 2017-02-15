import {expect} from 'chai'
import {factorial} from '../src/factorial'

describe.only('factorial()', () => {
  
  it('should be a function', () => {
    expect(factorial).to.be.a('function')
  })

  it('should return an error for a non number', () => {
    expect(factorial('one')).to.equal("Error: Please input number")
  })

  it('should return an error for a neg number', () => {
    expect(factorial(-5)).to.equal("Error: Number must be positive")
  })

  it('should return 1 for input 1', () => {
    expect(factorial(1)).to.equal(1)
  })

  it('should factorialize 5', () => {
    expect(factorial(5)).to.equal(120)
  })
})