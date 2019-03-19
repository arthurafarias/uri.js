var { QueryPair } = require("./QueryPair");

function QueryTokenizer() {

    var raw = this.raw.query;
    // var raw_reversed = raw.split("").reverse().join("");

    this.raw = {};
    this.raw.query = raw;
    this.raw.pairs = [];

    this.raw.pairs = raw.match(/(?:&?(?:(?:[^=&]+)(?:=(?:[^=&]*)?)?))/g);

    if (this.raw.pairs) {
        raw = raw.replace(/(?:&?(?:(?:[^=&]+)(?:=(?:[^=&]*)?)?))/g, "");
        raw_reversed = raw.split("").reverse().join("");
    }

    if (raw)
        throw new TypeError("Invalid query string");
}

function QueryParser() {

    this.raw.pairs.forEach((p) => {
        this.pairs.push(new QueryPair(p));
    });

}

class Query {
    constructor(query_string) {

        this.raw = {};
        this.pairs = [];

        this.raw.query = query_string;

        if (this.raw.query) {
            QueryTokenizer.call(this);
            QueryParser.call(this);
        }

    }

    toString() {
        if (this.raw.query) {
            return `?${this.raw.query}`;
        } else {
            return "";
        }
    }
};

module.exports = {
    Query: Query
}