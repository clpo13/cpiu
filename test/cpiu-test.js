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
    it('should return an error when the wrong year is given')
  })
})
