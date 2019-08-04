QueryString To JSON
=========

QueryString to JSON parser. One that helps in keeping the integers and float intact automatically. Works for simple query strings where every element is used just once.

## Installation

  `npm install @mydoclaw/querystring-json`

## Usage

    var numFormatter = require('@mydoclaw/querystring-json');

    var formattedNum = numFormatter(35666);
  
  
  Output should be `35,66`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.