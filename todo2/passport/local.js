const passport = require("passport")
const passportLocal = require('passport-local')

const User = require("../models/user")
const bcrypt = require('bcrypt')

const LocalStrategy = passportLocal.Strategy
const passportConfig = {
  usernameFiled : 'email',
  passwordFiled : 'password'
}

// 일반 로그인 전략 -- sns 로그인
const passportVerify = async(email, password, done) => {
  try{
    const user = await User.findOne({
      where: {
        email
      }
    })

    if(!user){
      return done(null, false, {
        status: false,
        message: '가입되지 않은 회원입니다'
      })
    } 
    const result = await bcrypt.compare(password, user.password)
    // 사용자가 입력한 비밀번호와 데이터 베이스에서 찾아온 비밀번호와 비교 boolean 반환
    if(result){
      return done(null, user)
    } else {
      return done(null, false, {
        status: false,
        message: '비밀번호가 올바르지 않습니다'
      })
    }
  } catch(err){
    done(err)
  }
}

module.exports = () => {
  passport.use('local', new LocalStrategy(passportConfig, passportVerify))
}