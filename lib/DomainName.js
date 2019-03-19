function DomainNameTokenizer() {}
function DomainNameParser() {}

class DomainName {
    constructor(domain_name_string) {
        
        this.raw = {};
        this.raw.domain_name = domain_name_string;

        DomainNameTokenizer.call(this);
        DomainNameParser.call(this);

    }

    toString() {
        return this.raw.domain_name;
    }
}

module.exports = {
    DomainName: DomainName
}