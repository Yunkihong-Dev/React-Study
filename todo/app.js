const express = require('express')
const morgan = require('morgan')
const user = require('./routes/user')
const todo = require('./routes/todo')

const passportConfig = require('./passport/index')
const session = require('express-session')

const path = require('path')
const db = require('./models')
const passport = require('passport')

passportConfig()
const app = express()


db.sequelize.sync()
.then(()=> console.log("DB연결 성공"))
.catch(err => console.log(err))


app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: "1234",
  cookie: {
    sameSite: 'none',// 쿠키의 전송 제한, 강도 설정 가능, none, lax, strict
    httpOnly: true, // 코드 접근을 막을 것인지 통신에만 사용할 건지
    secure: true // 보안관련 옵션 https
  }
}))


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', user)
app.use('/todo', todo)

app.listen(3030, () => {
  console.log("3030번 서버 실행 중")
})