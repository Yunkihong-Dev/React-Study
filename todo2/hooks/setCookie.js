const Cookies = require("js-cookie");

const SetCookie = (cookiename, usrin) => { 
    console.log("SetCookie 들어옴, 값은 : ",cookiename," , ",usrin);
    Cookies.set(cookiename, usrin, {
        expires: 1, // 1 day
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
};

module.exports = SetCookie;