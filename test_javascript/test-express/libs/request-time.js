module.exports = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}
