var { PathNode } = require("./PathNode");

function PathTokenizer() {

    var raw = this.raw.path || "";

    this.raw = {};
    this.raw.nodes = raw.match(/\/?([^\/]+)/g) || [];

}

function PathParser() {

    this.nodes = [];

    this.raw.nodes.forEach( (n) => {
        this.nodes.push(new PathNode(n.slice(1,n.length)));
    });

}

class Path {
    constructor(path_string) {

        this.raw = {};

        this.raw.path = path_string;

        PathTokenizer.call(this);
        PathParser.call(this);

    }

    toString() {
        if (this.raw.path != "") {
            return `/${this.nodes.join("/")}`;
        } else {
            return "";
        }
    }
};

module.exports = {
    Path: Path
}