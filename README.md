# CPIU

[![Build Status](https://travis-ci.org/clpo13/cpiu.svg?branch=master)](https://travis-ci.org/clpo13/cpiu)
[![Dependency Status](https://david-dm.org/clpo13/cpiu.svg)](https://david-dm.org/clpo13/cpiu)
[![devDependency Status](https://david-dm.org/clpo13/cpiu/dev-status.svg)](https://david-dm.org/clpo13/cpiu#info=devDependencies)
[![codecov](https://codecov.io/gh/clpo13/cpiu/branch/master/graph/badge.svg)](https://codecov.io/gh/clpo13/cpiu)

CPIU is a Node.js interface for [CPI-U](https://www.bls.gov/cpi/) data provided by the U.S. Bureau of Labor Statistics. CPI-U data are commonly used for calculating inflation. More info on the BLS Public Data API is available [here](https://www.bls.gov/developers/home.htm).

Neither I nor BLS.gov can vouch for the data or analyses derived from these data after the data have been retrieved from BLS.gov.

## Installation

Requires [Node.js](https://nodejs.org). Get the module with `npm install cpiu` and use it with `var cpiu = require('cpiu');`.

Move `.env.example` to `.env` (or create a `.env` file with the environment variable `BLS_API_KEY`) and enter your BLS API key, which can be obtained [here](https://data.bls.gov/registrationEngine/).

## License

This code is licensed under [GPLv3](LICENSE).
