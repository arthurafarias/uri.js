var { EncodedURIComponent } = require("./EncodedURIComponent");

class User extends EncodedURIComponent {
    constructor(...args) {
        super(...args);

        this.raw.user = this.raw.encoded_uri_component;

    }

    toString() {
        if (this.raw.user) {
            return this.raw.user.toString();
        } else {
            return null;
        }
    }
}

module.exports = {
    User: User
}