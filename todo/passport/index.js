const local = require('./local')
const jwt = require('./jwt')

const User = require('../models/user')
const passport = require('passport')

module.exports = () => {
  // 세션 저장
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // 세션에서 전달받은 id를 디코드하여 사용자 정보를 어디서든 사용할 수 있도록하는 역할
  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  jwt()
  local()
}
























