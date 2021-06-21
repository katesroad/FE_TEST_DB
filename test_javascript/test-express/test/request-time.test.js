const { assert } = require('chai')
const requestTime = require('../libs/request-time')
const sinon = require('sinon')

describe('requestTime middleware', () => {
  it('should add a timestamp `requestTime` prop to `req`', () => {
    const req = {}
    const res = sinon.fake()
    const next = sinon.fake()
    requestTime(req, res, next)
	  assert.ok(req.requestTime > 0)
	  assert.ok(next.tobecal)
  })
})
