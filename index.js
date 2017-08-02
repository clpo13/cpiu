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

require('dotenv-safe').load()
const rp = require('request-promise')

const baseURI = 'https://api.bls.gov/publicAPI/v2/timeseries/data/'
const series = 'CUUR0000SA0'

/**
 * Request data from the BLS public API.
 * 
 * @param {Array} options payload to send to the API
 * @returns {Promise}
 */
function requestData (options) {
  return rp(options)
    .then(function (res) {
      // do something
      // console.log(res)
      // console.log(res.Results.series[0].data[0])
      return res
    })
    .catch(function (err) {
      // handle error
      // console.log(err)
      return err
    })
}

/**
 * Retrieve data for the past three years of this series.
 * 
 * @returns {Promise}
 */
function singleSeries () {
  const options = {
    uri: `${baseURI}${series}`,
    json: true
  }

  return requestData(options)
}

/**
 * Retrieve data for an arbitrary range of years (max 20 year span)
 * with options to to include annual averages and change calculations.
 * If no parameters are specified, data for the last three years will
 * be returned. If a start year is given, an end year must also be given.
 * 
 * @param {number} start first year of data to be requested
 * @param {number} end last year of data to be requested
 * @param {Boolean} average average of each year's data
 * @param {Boolean} calc net and percent changes between months and years
 * @returns {Promise}
 */
function singleSeriesWithOptions (start, end, average, calc) {
  const options = {
    method: 'POST',
    uri: `${baseURI}`,
    body: {
      registrationkey: process.env.BLS_API_KEY,
      seriesid: [`${series}`],
      startyear: start,
      endyear: end,
      annualaverage: average,
      calculations: calc
    },
    json: true
  }

  return requestData(options)
}

/**
 * Retrieve data for a single year, stripped of unnecessary response data.
 * 
 * @param {number} year the year to get data for
 * @returns {Promise}
 */
function singleYear (year) {
  return singleSeriesWithOptions(year, year, true)
    .then(function (data) {
      return data.Results.series[0].data
    })
}

/**
 * Get the annual average CPI value for a single year.
 * 
 * @param {number} year the year to get data for
 * @returns {Promise}
 */
function singleYearCPI (year) {
  return singleYear(year)
    .then(function (data) {
      return data[0].value
    })
}

/**
 * Get the CPI value for a single month.
 * 
 * @param {number} year the year to get data for
 * @param {number} month the month to get data for
 * @returns {Promise}
 */
function singleMonthCPI (year, month) {
  return singleYear(year)
    .then(function (data) {
      return data.reverse()[month - 1].value
    })
}

module.exports = {
  singleSeries: singleSeries,
  singleSeriesWithOptions: singleSeriesWithOptions,
  singleYear: singleYear,
  singleYearCPI: singleYearCPI,
  singleMonthCPI: singleMonthCPI
}
