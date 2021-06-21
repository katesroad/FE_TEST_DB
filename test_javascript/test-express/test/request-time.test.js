const { assert } = require('chai')
const requestTime = require('../libs/request-time')

describe('requestTime middleware', () => {
  it('should add a timestamp `requestTime` prop to `req`', () => {
    const req = {}
    const next = () => {}
    const res = () => {}
    requestTime(req, res, next)
    assert.ok(req.requestTime > 0)
  })
})
