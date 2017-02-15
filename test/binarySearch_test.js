import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe.only('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })
})