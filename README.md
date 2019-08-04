QueryString To JSON
=========

QueryString to JSON parser. One that helps in keeping the integers and float intact automatically. Works for simple query strings where every element is used just once. Specially useful when you want to validate the querystring part of url as no conversion is required for int (positive and negetive values) and float. 


## Installation

  `npm install @mydoclaw/querystring-json`

## Usage
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=IN");
	console.log(output);
	
	output should be  {"search": "IN"}
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("search=IN");
	console.log(output);
	
	output should be  {"search": "IN"}
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?value=1");
	console.log(output);
	
	output should be {"value":1}

	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&apikey=applekey");
	console.log(output);
  
	output should be {"search":"india","value":1,"apikey":"applekey"}
  
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&apikey=applekey");
	console.log(output);
	
	output should be {"search":"india","value":1,"apikey":"applekey"}


	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&balance=99.9&apikey=applekey");
	console.log(output);
		
	output should be {"search":"india","value":1,"balance":99.9,"apikey":"applekey"}
	
	var queryStringToJson = require('@mydoclaw/querystring-json');
	var output = queryStringToJson("?search=india&value=1&balance=99.9&myemail=myemail@mymail.com");
	console.log(output);
		
	output should be {"search":"india","value":1,"balance":99.9,"myemail":"myemail@mymail.com"}	
	

	
## Tests

  `npm test`
  
## Node js 

	var http = require('http');
	var url = require('url');
	var queryStringToJson = require('@mydoclaw/querystring-json');



	var server = http.createServer(function (request, response) {
	  var stringData = url.parse(request.url, true).search;

	  if ( typeof stringData !== 'undefined' && stringData ){
		stringData=decodeURIComponent(stringData);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(queryStringToJson(stringData));
		response.end();
	  }  
	  response.end();
	});

	server.listen(8000);
	
## Test Node js	
	Test with URL https://{hostname}:{port}?query1=myquery&query2=123&query3=9.99
				  http://{hostname}:{port}?query1=myquery&query2=123&query3=9.99	
	
	output should be  {"query1": "myquery","query2":123,"query3":9.99}


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.