var { Host } = require("./Host");
var { Port } = require("./Port");
var { UserInfo } = require("./UserInfo");

function AuthorityTokenizer() {

    var raw = this.raw.authority;
    var raw_reversed = raw.split("").reverse().join("");

    this.raw.user_info = "";
    this.raw.host = "";
    this.raw.port = "";

    this.raw.user_info = raw.match(/^(.+)@/);

    if (this.raw.user_info) {
        this.raw.user_info = this.raw.user_info[1];
        raw = raw.replace(/^(.+)@/, "");
        raw_reversed = raw.split("").reverse().join("");
    }

    this.raw.port = raw_reversed.match(/^(.+):/);

    if (this.raw.port) {
        this.raw.port = this.raw.port[1].split("").reverse().join("");
        raw_reversed = raw_reversed.replace(/^(.+):/, "");
        raw = raw_reversed.split("").reverse().join("");
    }

    this.raw.host = raw;

}

function AuthorityParser() {

    if (this.raw.host == "")
        throw new TypeError(`Invalid Authority Host`);

    this.host = new Host(this.raw.host);
    this.port = new Port(this.raw.port);
    this.user_info = new UserInfo(this.raw.user_info);

}

class Authority {

    constructor(authority_string) {

        if (typeof (authority_string) != "string") {
            throw new TypeError("Invalid argument.");
        }

        this.raw = {};
        this.raw.authority = authority_string;

        AuthorityTokenizer.call(this);
        AuthorityParser.call(this);

        delete this.raw;

    }

    toString() {
        return `//${this.user_info.toString()}${this.host.toString()}${this.port.toString()}`;
    }

}



module.exports = {
    Authority: Authority
}