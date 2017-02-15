import {expect} from 'chai'
import {bubbleSort} from '../src/bubbleSort'

describe.only('bubbleSort()', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function')
  })

  it('should return an error if type isn\'t an array', () => {
    expect(bubbleSort('hi!')).to.equal('Error: Please input an array')
  })

  it('should return the input if array is length 1', () => {
    expect(bubbleSort([1])).to.eql([1])
  })

  const testArray = [4,7,3,8,56,33,27,0,2]
  const sortedArray = [0,2,3,4,7,8,33,27,56]

  it('should return a sorted Array', () => {
    expect(bubbleSort(testArray)).to.eql(sortedArray)
  })
})