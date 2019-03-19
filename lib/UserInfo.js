var { User } = require("./User");
var { Password } = require("./Password");

function UserInfoTokenizer() {

    this.raw.user = "";
    this.raw.password = "";

    if (!this.raw.user_info) return ;

    var raw = this.raw.user_info;
    var raw_reversed = raw.split("").reverse().join("");

    this.raw.password = raw_reversed.match(/^(.+):/);

    if (this.raw.password) {
        this.raw.password = this.raw.password[1].split("").reverse().join("");
        raw_reversed = raw_reversed.replace(/^(.+):/, "");
        raw = raw_reversed.split("").reverse().join("");
    }

    this.raw.user = raw;

}

function UserInfoParser() {

    this.user = new User(this.raw.user);
    this.password = new Password(this.raw.password);

}

class UserInfo {
    constructor(user_info_string) {

        this.raw = {};
        this.raw.user_info = user_info_string;

        UserInfoTokenizer.call(this);
        UserInfoParser.call(this);

    }

    toString() {
        if (this.user.toString()) {
            return `${this.user.toString()}${this.password.toString()}@`
        } else
            return ""
    }
}

module.exports = {
    UserInfo: UserInfo
}