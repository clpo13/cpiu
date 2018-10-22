# CPIU

[![Build Status](https://travis-ci.org/clpo13/cpiu.svg?branch=master)](https://travis-ci.org/clpo13/cpiu)
[![Dependency Status](https://david-dm.org/clpo13/cpiu.svg)](https://david-dm.org/clpo13/cpiu)
[![devDependency Status](https://david-dm.org/clpo13/cpiu/dev-status.svg)](https://david-dm.org/clpo13/cpiu#info=devDependencies)
[![codecov](https://codecov.io/gh/clpo13/cpiu/branch/master/graph/badge.svg)](https://codecov.io/gh/clpo13/cpiu)
[![npm](https://img.shields.io/npm/v/cpiu.svg)](https://www.npmjs.com/package/cpiu)

CPIU is a Node.js interface for [CPI-U](https://www.bls.gov/cpi/) data provided by the U.S. Bureau of Labor Statistics. CPI-U data are commonly used for calculating inflation. More info on the BLS Public Data API is available [here](https://www.bls.gov/developers/home.htm).

Neither I nor BLS.gov can vouch for the data or analyses derived from these data after the data have been retrieved from BLS.gov.

## Installation

Requires [Node.js](https://nodejs.org) 4 or up. Get the module with `npm install cpiu` and use it with `var cpiu = require('cpiu');`.

Copy `.env.example` to `.env` (or create a `.env` file with the environment variable `BLS_API_KEY`) and enter your BLS API key, which can be obtained [here](https://data.bls.gov/registrationEngine/).

## Usage

API documentation can be found [here](https://clpo13.github.io/cpiu).

Better documentation, including examples, is pending.

## License

Copyright &copy; 2017–2018 Cody Logan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

A copy of the GNU General Public License can be found in [LICENSE](LICENSE) and at <http://www.gnu.org/licenses/>.
