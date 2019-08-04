QueryString To JSON
=========

QueryString to JSON parser. One that helps in keeping the integers and float intact automatically. Works for simple query strings where every element is used just once. Specially useful when you want to validate the querystring part of url as no conversion is required for int (positive and negetive values) and float. 


## Installation

  `npm install @mydoclaw/querystring-json`

## Usage
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?value=1");
	console.log(output);
	
	output should be {"value":1}

	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=IN");
	console.log(output);
	
	output should be  {"search": "IN"}
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&apikey=applekey");
	console.log(output);
  
	output should be {"search": "india","value":1,"apikey": "applekey"}
  
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&apikey=applekey");
	console.log(output);
	
	output should be {"search": "india","value":1,"apikey": "applekey"}


	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&balance=99.9&apikey=applekey");
	console.log(output);
		
	output should be {"search": "india","value":1,"balance":99.9,"apikey": "applekey"}
	
	
## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.