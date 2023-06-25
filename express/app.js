const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
//현재 실행되는  위치
//npm i morgan --로깅 미들웨어
// 사용자의 요청, 요청사항, status code를 따로 로깅하지 않아도 자동으로 로그
//

app.use(morgan('dev'))
app.use(express.json())
// json 데이터를 읽는걸 허용
// body-parser, json(x), express 기본 내장
app.use(express.urlencoded({extended: false}))
// url에 있는 정보를 해석할 때 express 내부에 모듈o 외부모듈 o duqn
// 만약 false라면 추가 라이브러리가 아닌 내장모듈만 값으로 해석

app.use('/',express.static(path.join(_dirname,'public')))
// 정적 파일 제공



app.use('/user',user)

app.get('/',(req,res) => {
    res.send("home")
})

app.listen(3000, ()=>{
    console.log("3000번 서버 실행 중");
})
 


