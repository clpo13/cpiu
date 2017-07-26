const assert = require('assert')
cpiu = require('../index')

describe('cpiu', function () {
  describe('singleSeries', function () {
    it('should return the right status', function () {
      cpiu.singleSeries().then(function (res) {
        assert(res.status === 'REQUEST_SUCCEEDED')
      })
    })
  })

  describe('singleSeriesWithOptions', function () {
    it('should return the right status', function () {
      cpiu.singleSeriesWithOptions(1999, 2000).then(function (res) {
        assert(res.status === 'REQUEST_SUCCEEDED')
      })
    })
  })
})
