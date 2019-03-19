function FragmentTokenizer() {}
function FragmentParser() {}

class Fragment {
    constructor(fragment_string) {

        this.raw = {};

        this.raw.fragment = fragment_string;

        FragmentTokenizer.call(this);
        FragmentParser.call(this);

    }

    toString() {
        if (this.raw.fragment) {
            return `#${this.raw.fragment}`;
        } else {
            return "";
        }
    }
};

module.exports = {
    Fragment: Fragment
}