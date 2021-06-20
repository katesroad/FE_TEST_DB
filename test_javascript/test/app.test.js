const { assert } = require('chai')
const app = require('../app')

// describe, defined by test runner
describe('app', () => {
  describe('sayHello', () => {
    const sayHelloResult = app.sayHello()
    it('app.sayHello should return Hello', () => {
      // usually, we keep the result in a varaible as result
      // assert, defined by assertion library
      assert.equal(sayHelloResult, 'Hello')
    })
    it('app.sayHello should return string', () => {
      const result = app.sayHello()
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers', () => {
    const addNumbersResult = app.addNumbers(5, 5)
    it('app.addNumbers should be above 5', () => {
      assert.isAbove(addNumbersResult, 5)
    })
    it('app.addNumbers should return type number', () => {
      assert.typeOf(addNumbersResult, 'number')
    })
  })
})
