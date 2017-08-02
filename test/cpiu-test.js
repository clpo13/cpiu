// CPIU - a Node.js interface for fetching CPI-U data from BLS.gov
// Copyright (C) 2017 Cody Logan
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

const expect = require('chai').expect
const nock = require('nock')
const cpiu = require('../index')

describe('cpiu', function () {
  describe('singleSeries', function () {
    beforeEach(function () {
      var singleSeriesResponse = {
        'status': 'REQUEST_SUCCEEDED',
        'responseTime': 30,
        'message': [],
        'Results': {
          'series': [{
            'seriesID': 'CUUR0000SA0',
            'data': [{
              'year': '2017',
              'period': 'M06',
              'periodName': 'June',
              'value': '244.955',
              'footnotes': [{}]
            },
            {
              'year': '2017',
              'period': 'M05',
              'periodName': 'May',
              'value': '244.733',
              'footnotes': [{}]
            },
            {
              'year': '2017',
              'period': 'M04',
              'periodName': 'April',
              'value': '244.524',
              'footnotes': [{}]
            },
            {
              'year': '2017',
              'period': 'M03',
              'periodName': 'March',
              'value': '243.801',
              'footnotes': [{}]
            },
            {
              'year': '2017',
              'period': 'M02',
              'periodName': 'February',
              'value': '243.603',
              'footnotes': [{}]
            },
            {
              'year': '2017',
              'period': 'M01',
              'periodName': 'January',
              'value': '242.839',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M12',
              'periodName': 'December',
              'value': '241.432',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M11',
              'periodName': 'November',
              'value': '241.353',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M10',
              'periodName': 'October',
              'value': '241.729',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M09',
              'periodName': 'September',
              'value': '241.428',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M08',
              'periodName': 'August',
              'value': '240.849',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M07',
              'periodName': 'July',
              'value': '240.628',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M06',
              'periodName': 'June',
              'value': '241.018',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M05',
              'periodName': 'May',
              'value': '240.229',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M04',
              'periodName': 'April',
              'value': '239.261',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M03',
              'periodName': 'March',
              'value': '238.132',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M02',
              'periodName': 'February',
              'value': '237.111',
              'footnotes': [{}]
            },
            {
              'year': '2016',
              'period': 'M01',
              'periodName': 'January',
              'value': '236.916',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M12',
              'periodName': 'December',
              'value': '236.525',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M11',
              'periodName': 'November',
              'value': '237.336',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M10',
              'periodName': 'October',
              'value': '237.838',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M09',
              'periodName': 'September',
              'value': '237.945',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M08',
              'periodName': 'August',
              'value': '238.316',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M07',
              'periodName': 'July',
              'value': '238.654',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M06',
              'periodName': 'June',
              'value': '238.638',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M05',
              'periodName': 'May',
              'value': '237.805',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M04',
              'periodName': 'April',
              'value': '236.599',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M03',
              'periodName': 'March',
              'value': '236.119',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M02',
              'periodName': 'February',
              'value': '234.722',
              'footnotes': [{}]
            },
            {
              'year': '2015',
              'period': 'M01',
              'periodName': 'January',
              'value': '233.707',
              'footnotes': [{}]
            }]
          }]
        }
      }

      nock('https://api.bls.gov')
        .post('/publicAPI/v2/timeseries/data/')
        .reply(200, singleSeriesResponse)
    })

    it('should return the right status', function () {
      cpiu.singleSeries().then(function (res) {
        console.log(res)
        expect(res.status).to.equal('REQUEST_SUCCEEDED')
      }).catch(function (err) {
        console.log(err)
      })
    })
  })

  describe('singleSeriesWithOptions', function () {
    it('should return the right status', function () {
      cpiu.singleSeriesWithOptions(1999, 2000).then(function (res) {
        expect(res.status).to.equal('REQUEST_SUCCEEDED')
      })
    })
  })
})
