import { expect } from 'chai'
import {fibonacci} from '../src/fibonacci'

describe.only('fibonacci()', () => {

  it('should be a function', () => {
    expect(fibonacci).to.be.a('function')
  })

  it('return an error for a non number', () => {
    expect(fibonacci('hi')).to.equal("Error: please enter a number")
  })

  it('return an error for a negative number', () => {
    expect(fibonacci(-5)).to.equal("Error: please enter a positive number")
  })

  it('returns a fibonacci number', () => {
    expect(fibonacci(5)).to.equal(5)
    expect(fibonacci(7)).to.equal(13)
    expect(fibonacci(14)).to.equal(377)
    expect(fibonacci(36)).to.equal(14930352)
  })
})