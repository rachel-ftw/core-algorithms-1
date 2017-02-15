import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe.only('MergeSort', () => {
  let inputArray = [3,1,4,2,7,6,5,9,10,8]

  it('should be a function', () => {
    expect(mergeSort).to.be.a('function')
  })

  it('returns an error for a string input', () => {
    expect(mergeSort('hi')).to.equal('Error: Input must be an array.')
  })

  it('returns an the array if it\'s less than two length', () => {
    expect(mergeSort([1])).to.eql([1])
  })

  it('sorts an array using merge sort, where halves are even', () => {
    expect(mergeSort([1,2,3,4,5,6,7,8])).to.eql([1,2,3,4,5,6,7,8])
  })

  it('sorts an array using merge sort, where halves are odd', () => {
    expect(mergeSort(inputArray)).to.eql([1,2,3,4,5,6,7,8,9,10])
  })

    it('sorts an array using merge sort, array.length is odd', () => {
    expect(mergeSort([1,2,3,4,5,6,7])).to.eql([1,2,3,4,5,6,7])
  })

  it('return array length equal to input', () => {
    expect(mergeSort(inputArray).length).to.equal(inputArray.length)
  })
})