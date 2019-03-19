var { EncodedURIComponent } = require("./EncodedURIComponent");

class Password extends EncodedURIComponent {
    constructor(...args) {
        super(...args);
        this.raw.password = this.raw.encoded_uri_component;
    }

    toString() {
        if (this.raw.password) {
            return `:${this.raw.password}`
        } else {
            return "";
        }
    }
}

module.exports = {
    Password: Password
}