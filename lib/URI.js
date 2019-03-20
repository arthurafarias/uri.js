var { Scheme } = require("./Scheme");
var { Authority } = require("./Authority");
var { Path } = require("./Path");
var { Query } = require("./Query");
var { Fragment } = require("./Fragment");

function URITokenizer () {

    var raw = this.raw.uri;
    var raw_reversed = raw.split("").reverse().join("");

    this.raw = {};
    this.raw.uri = raw;
    this.raw.scheme = "";
    this.raw.authority = "";
    this.raw.path = "";
    this.raw.query = "";
    this.raw.fragment = "";

    this.raw.scheme = raw.match(/^(.+):\/\//);

    if (this.raw.scheme) {
        this.raw.scheme = this.raw.scheme[1];
        raw = raw.replace(/^(.+):\/\//, "");
        raw_reversed = raw.split("").reverse().join("");
    } else {
        this.raw.scheme = "http";
    }

    this.raw.fragment = raw_reversed.match(/^(.+)#/);

    if (this.raw.fragment) {
        this.raw.fragment = this.raw.fragment[1].split("").reverse().join("");
        raw_reversed = raw_reversed.replace(/^(.+)#/, "");
        raw = raw_reversed.split("").reverse().join("");
    }

    this.raw.query = raw_reversed.match(/^(.+)\?/);

    if (this.raw.query) {
        this.raw.query = this.raw.query[1].split("").reverse().join("");
        raw_reversed = raw_reversed.replace(/^(.+)\?/, "");
        raw = raw_reversed.split("").reverse().join("");
    }

    this.raw.path = raw_reversed.match(/[^/]+\//g);

    if (this.raw.path) {
        this.raw.path = this.raw.path.join("").split("").reverse().join("");
        raw_reversed = raw_reversed.replace(/[^/]+\//g, "");
        raw = raw_reversed.split("").reverse().join("");
    }

    if (raw.length > 0) {
        this.raw.authority = raw;
    }

}

function URIParser() {
    
    this.scheme = new Scheme(this.raw.scheme);

    if (this.raw.authority == "")
        throw new TypeError(`Invalid URI Authority`);

    this.fragment = new Fragment(this.raw.fragment);
    this.query = new Query(this.raw.query);
    this.path = new Path(this.raw.path);
    this.authority = new Authority(this.raw.authority);
    
}

class URI {

    constructor(uri_string) {

        if (typeof (uri_string) != "string") {
            throw new TypeError("Invalid argument.");
        }

        this.raw = {};
        this.raw.uri = uri_string;

        URITokenizer.call(this);
        URIParser.call(this);

    }

    toString() {
        return `${this.scheme.toString()}${this.authority.toString()}${this.path.toString()}${this.query.toString()}${this.fragment.toString()}`
    }

}

module.exports = {
    URI: URI
}