function PortTokenizer() {}
function PortParser() {

    if (this.raw.port == null || this.raw.port == "")
        this.raw.port = "80";

    this.port = parseInt(this.raw.port, 10);

    if (typeof(this.port) != "number") {
        throw new TypeError("Invalid port not a number.");
    }

    if (this.port <= 0 || this.port > 65535)
        throw new TypeError("Port out of range.");

    if (!this.port)
        throw new TypeError("Supplied port is not a number.");

}

class Port {
    constructor(port_string) {
        this.raw = {};
        this.raw.port = port_string;
        PortTokenizer.call(this);
        PortParser.call(this);
    }

    toString() {
        if (this.port.toString()) {
            return `:${this.port.toString()}`;
        } else {
            return ``;
        }
    }
}

module.exports = {
    Port: Port
}