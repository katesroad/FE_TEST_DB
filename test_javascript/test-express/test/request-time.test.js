const { assert, expect } = require('chai')
const requestTime = require('../libs/request-time')
const sinon = require('sinon')

describe('requestTime middleware', () => {
  it('should add a timestamp `requestTime` prop to `req`', () => {
    const req = {}
    const res = sinon.fake()
    const next = sinon.fake()
    requestTime(req, res, next)
    assert.ok(req.requestTime > 0)

    // Sinon spy: https://www.youtube.com/watch?v=lvjDDn9cpL4
    sinon.assert.calledOnce(next)
    sinon.assert.notCalled(res)

    // another way to make assertion using chai
    expect(next.calledOnce).to.be.true
  })
})
