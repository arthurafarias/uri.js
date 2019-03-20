function IPv6Tokenizer() {

    var raw = this.raw.ipv6_string;

    var prefix = [];
    var suffix = [];

    if (!raw.match(/^\[.*\]$/g)) {
        throw new TypeError("Invalid IPv6");
    }

    raw = raw.slice(1, raw.length-1);

    var match = raw.match(/::/g);
    var empty = 0;

    if (match)
        empty = match.reduce((acc, v) => (v == "::") ? ++acc : acc, 0);

    var raw_vector = raw.split(":");

    if (empty == 0 && raw_vector.length < 16)
        throw new TypeError("Invalid IPv6");

    if (empty > 1)
        throw new TypeError("Invalid IPv6");

    if (empty == 1)
        for (var i = 0; i < raw_vector.length; i++) {

            if (raw_vector[i] === "") {
                prefix = raw_vector.slice(0, i);
                suffix = raw_vector.slice(i + 1, raw_vector.length);
                break;
            }
        }

    var result = [];
    var result = result.concat(prefix).concat(Array(16 - prefix.length - suffix.length).fill("")).concat(suffix);

    result = result.map((v) => v === "" ? "0" : v);

    this.raw.ipv6 = result;

}

function IPv6Parser() {

    this.ipv6 = this.raw.ipv6.map( (v, i) => {
        var vi = parseInt(v, 16);
        if (isNaN(vi))
            throw new TypeError(`Invalid IPv6: field ${i} is not a number`);
        if (vi < 0 || vi > 0xffff)
            throw new TypeError(`Invalid IPv6: field ${i} should be bigger than 0x0000 and lower than 0xFFFF current value is ${v}`);
        return vi;
    });

}

class IPv6 {
    
    constructor(ipv6_string) {

        this.raw = {};

        this.raw.ipv6_string = ipv6_string;

        IPv6Tokenizer.call(this);
        IPv6Parser.call(this);

    }

    toString() {
        return "[" + this.ipv6.map((v) => v.toString(16).toUpperCase()).join(":") + "]";
    }
};

module.exports = {
    IPv6: IPv6
}