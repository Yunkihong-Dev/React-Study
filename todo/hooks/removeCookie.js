const Cookies = require("js-cookie");

const RemoveCookie = (cookiename) => {
    Cookies.remove(cookiename);
};
module.exports = RemoveCookie;