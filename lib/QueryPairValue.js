var {
    EncodedURIComponent
} = require("./EncodedURIComponent");

class QueryPairValue extends EncodedURIComponent {
    constructor(...args) {
        super(...args);

        this.raw.query_pair_value = this.raw.encoded_uri_component;

    }

    toString() {
        if (this.raw.query_pair_value) {
            return this.raw.query_pair_value.toString();
        } else {
            return null;
        }
    }
}

module.exports = {
    QueryPairValue: QueryPairValue
}