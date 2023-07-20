const Cookies = require("js-cookie");

const SetCookie = (cookiename, usrin) => { 
    console.log("SetCookie 들어옴, 값은 : ",cookiename," , ",usrin);
    Cookies.set(cookiename, usrin, {
        expires: 1, // 1 day
        secure: false,
        sameSite: 'strict',
        path: '/',
        domain: 'localhost:3000' //도메인 설정
    });
};

module.exports = SetCookie;