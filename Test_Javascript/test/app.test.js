const { assert } = require('chai')
const app = require('../app')

describe('app', () => {
  it('app should return hello', () => {
    assert.equal(app(), 'hello')
  })
})
