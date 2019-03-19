var {
    EncodedURIComponent
} = require("./EncodedURIComponent");

class PathNode extends EncodedURIComponent {
    constructor(...args) {
        super(...args);

        this.raw.path_node = this.raw.encoded_uri_component;

    }

    toString() {
        if (this.raw.path_node) {
            return this.raw.path_node.toString();
        } else {
            return null;
        }
    }
}

module.exports = {
    PathNode: PathNode
}