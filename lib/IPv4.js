function IPv4Tokenizer() {

    // Parsing and tokenizing at same time with regex

    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

    if (!regex.test(this.raw.ipv4_string)) {
        [this.raw.ipv4_string, this.raw.a, this.raw.b, this.raw.c, this.raw.d] = this.raw.ipv4.match(regex);
    }

}

function IPv4Parser() {

    if (!this.raw.ipv4_string) {
        throw new TypeError("IPv4 wasn't recognized");
    }

    this.a = parseInt(this.raw.a);
    this.b = parseInt(this.raw.b);
    this.c = parseInt(this.raw.c);
    this.d = parseInt(this.raw.d);

    if (a < 0 && a > 255)
        throw new TypeError("Invalid IPv4");

    if (b < 0 && b > 255)
        throw new TypeError("Invalid IPv4");

    if (c < 0 && c > 255)
        throw new TypeError("Invalid IPv4");

    if (d < 0 && d > 255)
        throw new TypeError("Invalid IPv4");
        

}

class IPv4 {
    constructor(ipv4_string) {

        this.raw = {};

        this.raw.ipv4 = ipv4_string;

        IPv4Tokenizer.call(this);
        IPv4Parser.call(this);

    }

    toString() {
        if (this.raw.ipv4) {
            return this.raw.ipv4;
        } else {
            return "";
        }
    }
};

module.exports = {
    IPv4: IPv4
}