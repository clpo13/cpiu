require('dotenv').config()
const rp = require('request-promise')

const baseURI = 'https://api.bls.gov/publicAPI/v2/timeseries/data/'
const series = 'CUUR0000SA0'

/**
 * Request data from the BLS public API.
 * @param {Array} options payload to send to the API
 */
function requestData (options) {
  rp(options)
    .then(function (res) {
      // do something
      console.log(res)
      //console.log(res.Results.series[0].data[0])
    })
    .catch(function (err) {
      // handle error
      console.log(err)
    })
}

/**
 * Retrieve data for the past three years of this series.
 */
function singleSeries () {
  const options = {
    uri: `${baseURI}${series}`,
    qs: {
      registrationkey: process.env.BLS_API_KEY
    },
    json: true
  }

  requestData(options)
}

/**
 * Retrieve data for an arbitrary range of years (max 20 year span)
 * with options to to include annual averages and change calculations.
 * @param {number} start first year of data to be requested
 * @param {number} end last year of data to be requested
 * @param {Boolean} average average of each year's data
 * @param {Boolean} calc net and percent changes between months and years
 */
function singleSeriesWithOptions (start, end, average = false, calc = false) {
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

  requestData(options)
}

module.exports = {
  singleSeries: singleSeries,
  singleSeriesWithOptions: singleSeriesWithOptions
}
