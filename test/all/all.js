function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("URI.js Library Unit Test", function() {
    importTest("IPv6 Unit Tests", "./ipv6_test.js");
});