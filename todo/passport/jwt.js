const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/user");
const passport = require("passport");

const JwtStrategy = Strategy;

const jwtConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 대상
  secretOrKey: "1234" // 복호화 키
}
// 복화를 위한 설정값

const jwtVerify = async (payload, done) => {
  try{
    const id = payload.id
    const user = await User.findOne({where: { id }})

    if(user){
      // 유저정보가 있고 5분 이하여야만 통과
      return done(null, user);
    } else {
      // 그 외에는 전부 실패
      done(null, false, {
        status: 401,
        message: "올바르지 않은 인증정보입니다."
      })
    }
  } catch(err){
    console.log(err);
    done(err)
  }
}

module.exports = () => {
  passport.use('jwt', new JwtStrategy(jwtConfig, jwtVerify))
}