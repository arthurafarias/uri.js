var { assert, expect, should, options } = require("./common.js");
var { URI } = require("../../lib/URI");

describe('URI Test Suite', function() {
    
    // TODO: the path is stopping on first item instead of run until there is not other end. that is. it should run until find the last character.
    it('http://user:password@google.com:80/path/path?query=value&query2=value2#fragment == http://user:password@google.com:80/path/path?query=value&query2=value2#fragment', function () {
        
        var address = new URI("http://user:password@google.com:80/path/path?query=value&query2=value2#fragment");
        address.toString().should.be.equal("http://user:password@google.com:80/path/path?query=value&query2=value2#fragment");

    });

    it('http://google.com:80/path/path?query=value&query2=value2#fragment == http://google.com:80/path/path?query=value&query2=value2#fragment', function () {

        var address = new URI("http://google.com:80/path/path?query=value&query2=value2#fragment");
        address.toString().should.be.equal("http://google.com:80/path/path?query=value&query2=value2#fragment");

    });

    it('http://user:password@google.com:80/path/path?query=value&query2=value2 == http://user:password@google.com:80/path/path?query=value&query2=value2', function () {

        var address = new URI("http://user:password@google.com:80/path/path?query=value&query2=value2");
        address.toString().should.be.equal("http://user:password@google.com:80/path/path?query=value&query2=value2");

    });

    it('http://user:password@google.com:80/path/path == http://user:password@google.com:80/path/path', function () {

        var address = new URI("http://user:password@google.com:80/path/path");
        address.toString().should.be.equal("http://user:password@google.com:80/path/path");

    });

    it('http://user:password@google.com:80 == http://user:password@google.com:80/', function () {

        var address = new URI("http://user:password@google.com:80");
        address.toString().should.be.equal("http://user:password@google.com:80/");

    });

    it('http://google.com:80 == http://google.com:80/', function () {

        var address = new URI("http://google.com:80");
        address.toString().should.be.equal("http://google.com:80/");

    });

    it('http://google.com == http://google.com:80/', function () {

        var address = new URI("http://google.com");
        address.toString().should.be.equal("http://google.com:80/");

    });

    it('http:// throws an error', function () {

        var tf = function () {
            new URI("http://")
        } 

        expect(tf).to.throw(TypeError);

    });

});