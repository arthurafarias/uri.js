var { QueryPairKey } = require("./QueryPairKey");
var { QueryPairValue } = require("./QueryPairValue");

function QueryPairTokenizer() {

    var raw = this.raw.query_pair;
    // var raw_reversed = raw.split("").reverse().join("");

    this.raw = {};
    this.raw.key = "";
    this.raw.value = "";

    var pair = raw.match(/^(?:&?(?:([^=&]+)(?:=([^=&]*)?)?))$/);

    this.raw.key = pair[1];
    this.raw.value = pair[2];

}
function QueryPairParser() {
    this.key = new QueryPairKey(this.raw.key);
    this.value = new QueryPairValue(this.raw.value);
}

class QueryPair {
    constructor(query_pair_string) {

        this.raw = {};

        this.raw.query_pair = query_pair_string;

        QueryPairTokenizer.call(this);
        QueryPairParser.call(this);

    }

    toString() {
        if (this.raw.query_pair != "") {
            return `${this.raw.query_pair}:`;
        } else {
            return "";
        }
    }
};

module.exports = {
    QueryPair: QueryPair
}