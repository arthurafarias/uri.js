var { assert, expect, should, options } = require("./common.js");
var { IPv6 } = require("../../lib/IPv6");

describe('IPv6 Object Creation Test', function() {
    
    it('[::ffff] == [0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]', function () {
        
        var address = new IPv6("[::ffff]");

        address.toString().should.be.equal("[0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]");

    });

    it('[0000::ffff] == [0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]', function () {

        var address = new IPv6("[0000::ffff]");

        address.toString().should.be.equal("[0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]");

    });

    it('[1111::ffff] == [1111:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]', function () {

        var address = new IPv6("[1111::ffff]");

        address.toString().should.be.equal("[1111:0:0:0:0:0:0:0:0:0:0:0:0:0:0:FFFF]");

    });

    it('[1::fffff] throws an error', function () {

        var tf = function () {
            new IPv6("[1::fffff]")
        }

        expect(tf).to.throw(TypeError);

    });

    it('[1:ffff] throws an error', function () {

        var tf = function () {
            new IPv6("[1:ffff]")
        }

        expect(tf).to.throw(TypeError);

    });

    it('[1::1::ffff] throws an error', function () {

        var tf = function() { new IPv6("[1::1::ffff]") }

        expect(tf).to.throw(TypeError);

    });

    it('[g::ffff] throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("[g::ffff]")
        }

        expect(tf).to.throw(TypeError);

    });

    it('::1 throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("::1")
        }

        expect(tf).to.throw(TypeError);

    });

    it('[::1 throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("[::1")
        }

        expect(tf).to.throw(TypeError);

    });

    it('[]::1 throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("[]::1")
        }

        expect(tf).to.throw(TypeError);

    });

    it('::1[] throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("::1[]")
        }

        expect(tf).to.throw(TypeError);

    });

    it('::1% throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("::1%")
        }

        expect(tf).to.throw(TypeError);

    });

    it(':%:1 throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6(":%:1")
        }

        expect(tf).to.throw(TypeError);

    });

    it(':1:1 throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6(":1:1")
        }

        expect(tf).to.throw(TypeError);

    });

    it('1: throws an error', function () {

        var tf = function () {
            var ipv6 = new IPv6("1:")
        }

        expect(tf).to.throw(TypeError);

    });

});