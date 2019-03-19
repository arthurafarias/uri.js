function HostTokenizer() {}
function HostParser() {}

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