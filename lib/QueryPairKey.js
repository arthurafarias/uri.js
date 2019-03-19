var {
    EncodedURIComponent
} = require("./EncodedURIComponent");

class QueryPairKey extends EncodedURIComponent {
    constructor(...args) {
        super(...args);

        this.raw.query_pair_key = this.raw.encoded_uri_component;

    }

    toString() {
        if (this.raw.query_pair_key) {
            return this.raw.query_pair_key.toString();
        } else {
            return null;
        }
    }
}

module.exports = {
    QueryPairKey: QueryPairKey
}