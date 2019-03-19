# URL.js

This is a small pure Node.Js module to parse URLs written using an intuitive approach to write a lexer and parser using Javascript. This library is a high level abstraction that gonna be use as base to a high speed C++11 compatible library.

```
>> -- scheme -> : ->|->|--------------------------------------------------------->|-> / -> path ->|--------------->|->|------------------>|--><
                        |-> // ->|-------------------|-> host ->|---------------|->|               |-> ? -> query ->|  |-> # -> fragment ->|
                                 |-> userinfo -> @ ->|          |-> : -> port ->|

Lexer

URI = (?:({{scheme}}):)(?://({{authority}}))?(?:/({{path}}))?(?:\?({{query}}))?(?:#({{fragment}}))
scheme = https?
authority = (?:(userinfo)@)?(host)(?::port)?
host = domain|ipv4|ipv6
userinfo = user(?::(?:password)?)?
user = encoded_uri_component
password = encoded_uri_component
query = (?:token(?:=value)?)(?:&token(?:=value))*
token = {{encoded_uri_component}}
value = {{encoded_uri_component}}
fragment = .*
encoded_uri_component = [^:\/@\?#&]+
domain = {{intl_domain_component}}(?:.{{intl_domain_component}})+
intl_domain_component = ([^ /t/r/n]){3,63}
ipv4 = +*
ipv6 = +*
```