function SchemeTokenizer() {}

function SchemeParser() {}

class Scheme {
    constructor(Scheme_string) {

        if (typeof (Scheme_string) != "string") {
            throw new TypeError("Invalid argument.");
        }

        this.raw = {};

        this.raw.scheme = Scheme_string;

        SchemeTokenizer.call(this);
        SchemeParser.call(this);

    }

    toString() {
        if (this.raw.scheme != "") {
            return `${this.raw.scheme}:`;
        } else {
            return "";
        }
    }
};

module.exports = {
    Scheme: Scheme
}