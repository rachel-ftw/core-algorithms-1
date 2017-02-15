import { expect } from 'chai'
import colatz from '../src/colatz'

describe.only('colatz()', function(){

  it('should be a function', function(){
    expect(colatz).to.be.a('function')
  })

  it('should return 1 when 1 is entered', function(){
    expect(colatz(1)).to.equal(0)
  })

  it('should give the steps to answer', function(){
    expect(colatz(2)).to.equal(1)
    expect(colatz(3)).to.equal(7)
    expect(colatz(5)).to.equal(5)
    expect(colatz(15)).to.equal(17)
  })

})