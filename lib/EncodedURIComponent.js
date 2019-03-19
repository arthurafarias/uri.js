function EncodedURIComponentTokenizer() {}
function EncodedURIComponentParser() {
    if (this.raw.encoded_uri_component == "") return;
    if (!/^(?:[^:\/@?=#\+\$ \r\n\t]*)(?:%[0-9A-F]{2})*$/g.test(this.raw.encoded_uri_component))
        throw new TypeError("Invalid URI encoded component.");
}

class EncodedURIComponent {
    
    constructor(encoded_uri_component_string) {

        this.raw = {};
        this.raw.encoded_uri_component = encoded_uri_component_string;

        EncodedURIComponentTokenizer.call(this);
        EncodedURIComponentParser.call(this);

    }

    toString() {
        if (this.raw.encoded_uri_component) {
            return `${this.raw.encoded_uri_component}`;
        } else {
            return ``;
        }
    }

}

module.exports = {
    EncodedURIComponent: EncodedURIComponent
}