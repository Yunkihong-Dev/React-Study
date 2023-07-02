const Cookies = require("js-cookie");

const GetCookie = (cookiename) => {
    Cookies.get(cookiename);
};
module.exports = GetCookie;