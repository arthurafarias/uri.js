
var { URI } = require("../lib/URI.js");

// console.log(JSON.stringify(new URI("http://foo.com/blah_blah")));
// console.log(JSON.stringify(new URI("http://foo.com/blah_blah/")));
// console.log(JSON.stringify(new URI("http://foo.com/blah_blah_(wikipedia)")));
// console.log(JSON.stringify(new URI("http://foo.com/blah_blah_(wikipedia)_(again)")));
// console.log(JSON.stringify(new URI("http://www.example.com/wpstyle/?p=364")));
// console.log(JSON.stringify(new URI("https://www.example.com/foo/?bar=baz&inga=42&quux")));
// console.log(JSON.stringify(new URI("http://✪df.ws/123")));
// console.log(JSON.stringify(new URI("http://userid:password@example.com:8080")));
// console.log(JSON.stringify(new URI("http://userid:password@example.com:8080/")));
// console.log(JSON.stringify(new URI("http://userid@example.com")));
// console.log(JSON.stringify(new URI("http://userid@example.com/")));
// console.log(JSON.stringify(new URI("http://userid@example.com:8080")));
// console.log(JSON.stringify(new URI("http://userid@example.com:8080/")));
// console.log(JSON.stringify(new URI("http://userid:password@example.com")));
// console.log(JSON.stringify(new URI("http://userid:password@example.com/")));
// console.log(JSON.stringify(new URI("http://142.42.1.1/")));
// console.log(JSON.stringify(new URI("http://142.42.1.1:8080/")));
// console.log(JSON.stringify(new URI("http://➡.ws/䨹")));
// console.log(JSON.stringify(new URI("http://⌘.ws")));
// console.log(JSON.stringify(new URI("http://⌘.ws/")));
// console.log(JSON.stringify(new URI("http://foo.com/blah_(wikipedia)#cite-1")));
// console.log(JSON.stringify(new URI("http://foo.com/blah_(wikipedia)_blah#cite-1")));
// console.log(JSON.stringify(new URI("http://foo.com/unicode_(✪)_in_parens")));
// console.log(JSON.stringify(new URI("http://foo.com/(something)?after=parens")));
// console.log(JSON.stringify(new URI("http://☺.damowmow.com/")));
// console.log(JSON.stringify(new URI("http://code.google.com/events/#&product=browser")));
// console.log(JSON.stringify(new URI("http://j.mp")));
// console.log(JSON.stringify(new URI("ftp://foo.bar/baz")));
// console.log(JSON.stringify(new URI("http://foo.bar/?q=Test%20URL-encoded%20stuff")));
// console.log(JSON.stringify(new URI("http://مثال.إختبار")));
// console.log(JSON.stringify(new URI("http://例子.测试")));
// console.log(JSON.stringify(new URI("http://उदाहरण.परीक्षा")));
//     // console.log(JSON.stringify(new URI("http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com")));
// console.log(JSON.stringify(new URI("http://1337.net")));
// console.log(JSON.stringify(new URI("http://a.b-c.de")));
// console.log(JSON.stringify(new URI("http://223.255.255.254")));
// console.log(JSON.stringify(new URI("https://foo_bar.example.com/")));

// console.log(JSON.stringify(new URI("http://")));
console.log(JSON.stringify(new URI("http://.")));
console.log(JSON.stringify(new URI("http://..")));
console.log(JSON.stringify(new URI("http://../")));
console.log(JSON.stringify(new URI("http://?")));
// console.log(JSON.stringify(new URI("http://??")));
// console.log(JSON.stringify(new URI("http://??/")));
console.log(JSON.stringify(new URI("http://#")));
// console.log(JSON.stringify(new URI("http://##")));
// console.log(JSON.stringify(new URI("http://##/")));
// console.log(JSON.stringify(new URI("http://foo.bar?q=Spaces should be encoded")));
console.log(JSON.stringify(new URI("//"))); // parse host
console.log(JSON.stringify(new URI("//a"))); // parse host
console.log(JSON.stringify(new URI("///a"))); // parse host
console.log(JSON.stringify(new URI("///"))); // parse host
console.log(JSON.stringify(new URI("http:///a"))); // parse host
console.log(JSON.stringify(new URI("foo.com"))); // parse host
console.log(JSON.stringify(new URI("rdar://1234"))); // parse domain
console.log(JSON.stringify(new URI("h://test"))); // parse domain
console.log(JSON.stringify(new URI("http:// shouldfail.com"))); // parse domain
// console.log(JSON.stringify(new URI(":// should fail")));
// console.log(JSON.stringify(new URI("http://foo.bar/foo(bar)baz quux")));
console.log(JSON.stringify(new URI("ftps://foo.bar/"))); // parse scheme
console.log(JSON.stringify(new URI("http://-error-.invalid/"))); // parse domain
console.log(JSON.stringify(new URI("http://a.b--c.de/"))); // parse domain
console.log(JSON.stringify(new URI("http://-a.b.co"))); // parse domain
console.log(JSON.stringify(new URI("http://a.b-.co"))); // parse domain
console.log(JSON.stringify(new URI("http://0.0.0.0"))); // parse ipv4
console.log(JSON.stringify(new URI("http://10.1.1.0"))); // parse ipv4
console.log(JSON.stringify(new URI("http://10.1.1.255"))); // parse ipv4
console.log(JSON.stringify(new URI("http://224.1.1.1"))); // parse ipv4
console.log(JSON.stringify(new URI("http://1.1.1.1.1"))); // parse ipv4
console.log(JSON.stringify(new URI("http://123.123.123"))); // parse ipv4
console.log(JSON.stringify(new URI("http://3628126748"))); // parse domain
console.log(JSON.stringify(new URI("http://.www.foo.bar/"))); // parse domain
console.log(JSON.stringify(new URI("http://www.foo.bar./"))); // parse domain
console.log(JSON.stringify(new URI("http://.www.foo.bar./"))); // parse domain
console.log(JSON.stringify(new URI("http://10.1.1.1"))); // parse ipv4
console.log(JSON.stringify(new URI("http://10.1.1.254"))); // parse ipv4

