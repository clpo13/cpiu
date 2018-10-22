// CPIU - a Node.js interface for fetching CPI-U data from BLS.gov
// Copyright (C) 2017–2018 Cody Logan
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Code for recording HTTP requests:
// nock.recorder.rec({
//   output_objects: true
// })
// <...HTTP request code...>
// var nockCallObjects = nock.recorder.play()
// console.log(nockCallObjects[0].response)
// fs.writeFileSync(path.join(__dirname, '/replies/singleYear.json'), JSON.stringify(nockCallObjects[0].response, null, '  '))

const expect = require('chai').expect
const nock = require('nock')
const cpiu = require('../index')
const path = require('path')
// const fs = require('fs')

describe('cpiu', function () {
  describe('singleSeries', function () {
    it('should return the right status', function () {
      nock('https://api.bls.gov')
        .get('/publicAPI/v2/timeseries/data/CUUR0000SA0')
        .replyWithFile(200, path.join(__dirname, '/replies/singleSeries.json'))

      return cpiu.singleSeries().then(function (res) {
        expect(res.status).to.equal('REQUEST_SUCCEEDED')
      })
    })
  })

  describe('singleSeriesWithOptions', function () {
    it('should return the right status', function () {
      nock('https://api.bls.gov')
        .post('/publicAPI/v2/timeseries/data/')
        .replyWithFile(200, path.join(__dirname, '/replies/singleSeriesWithOptions.json'))

      return cpiu.singleSeriesWithOptions(1913, 1914, true, true).then(function (res) {
        expect(res.status).to.equal('REQUEST_SUCCEEDED')
      })
    })
  })

  describe('singleYear', function () {
    it('should return an array with thirteen elements', function () {
      // twelve months plus annual data

      nock('https://api.bls.gov')
        .post('/publicAPI/v2/timeseries/data/')
        .replyWithFile(200, path.join(__dirname, '/replies/singleYear.json'))

      return cpiu.singleYear(1913).then(function (res) {
        expect(res.length).to.equal(13)
      })
    })
  })

  describe('singleYearCPI', function () {
    it('should return a number', function () {
      nock('https://api.bls.gov')
        .post('/publicAPI/v2/timeseries/data/')
        .replyWithFile(200, path.join(__dirname, '/replies/singleYear.json'))

      return cpiu.singleYearCPI(1913).then(function (res) {
        expect(res).to.be.a('number')
      })
    })
  })

  describe('singleMonthCPI', function () {
    it('should return a number', function () {
      nock('https://api.bls.gov')
        .post('/publicAPI/v2/timeseries/data/')
        .replyWithFile(200, path.join(__dirname, '/replies/singleYear.json'))

      return cpiu.singleMonthCPI(1913, 1).then(function (res) {
        expect(res).to.be.a('number')
      })
    })
  })
})
