'use strict';

var expect = require('chai').expect;
var queryStringToJson = require('../index');

describe('#queryStrinToJson', function() {
    it('queryStringToJson for non numeric querystring', function() {
        var result = queryStringToJson("?search=IN");
        expect(result).to.equal('{"search": "IN"}');
    });

    it('queryStringToJson for numeric data', function() {
        var result = queryStringToJson("?value=1");
        expect(result).to.equal('{"value":1}');
    });
	 
	 it('queryStringToJson for complex numeric and nonmumeric data', function() {
       var result = queryStringToJson("?search=india&value=1&apikey=applekey");
        expect(result).to.equal('{"search": "india","value":1,"apikey": "applekey"}');
    });
	
	it('queryStringToJson for complex numeric and nonmumeric data and a float', function() {
       var result = queryStringToJson("?search=india&value=1&balance=99.9&apikey=applekey");
        expect(result).to.equal('{"search": "india","value":1,"balance":99.9,"apikey": "applekey"}');
    });
	
});