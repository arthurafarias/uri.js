var { IPv4 } = require("./IPv4");
var { IPv6 } = require("./IPv6");
var { DomainName } = require("./DomainName");

function HostTokenizer() {}

function HostParser() {

    this.ipv6 = "";
    this.ipv4 = "";
    this.domain = "";

    var error = null;

    try {
        this.ipv4 = new IPv4(this.raw.host);
    } catch (e) {
        error = e;
    }

    try {
        this.ipv6 = new IPv6(this.raw.host);
    } catch (e) {
        error = e;
    }

    try {
        this.domain_name = new Domain(this.raw.host)
    } catch(e) {
        error = e;
    }

    if (error instanceof TypeError) {
        throw error;
    }

}

class Host {
    constructor(host_string) {
        this.raw = {};
        this.raw.host = host_string;

        HostTokenizer.call(this);
        HostParser.call(this);

    }

    toString() {
        return this.raw.host.toString();
    }
}

module.exports = {
    Host: Host
}