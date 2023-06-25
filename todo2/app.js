const express = require('express')
const morgan = require('morgan')
const user = require('./routes/user')

const path = require('path')
const db = require('./models')

const app = express()

db.sequelize.sync()
.then(()=> console.log("DB연결 성공"))
.catch(err => console.log(err))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/user', user)

app.listen(3030, () => {
  console.log("3030번 서버 실행 중")
})