# from-now

[![Build Status](https://travis-ci.com/pdkpavankumar/from-this-moment.svg?branch=master)](https://travis-ci.org/pdkpavankumar/from-this-moment) [![dependencies Status](https://david-dm.org/pdkpavankumar/from-this-moment/status.svg)](https://david-dm.org/pdkpavankumar/from-this-moment) [![devDependencies Status](https://david-dm.org/pdkpavankumar/from-this-moment/dev-status.svg)](https://david-dm.org/pdkpavankumar/from-this-moment?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


**A light weight npm moulde gives the time difference** ✨

Happy hacking =)

# Installation
npm install --save from-this-moment

# Usage
import ftm from 'from-this-moment' (or)

var ftm = require('from-this-moment')

**_ftm(dateTo,dateFrom)

by default dateFrom is referenced to the current timedate._**

ftm('Sat Mar 24 2019 0:32:01 GMT+0530 (India Standard Time)');

**output:** 23 minutes ago

ftm('Sat Mar 25 2019 0:32:01 GMT+0530 (India Standard Time)');

**output:** In 23 hours

ftm('Sat Mar 25 2017 0:32:01 GMT+0530 (India Standard Time)', 'Sat Mar 25 2019 0:32:01 GMT+0530 (India Standard Time)');

**output:** 2 years ago

# License

MIT © PDK Pavan Kumar