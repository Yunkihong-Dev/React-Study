

const { Sequelize } = require('sequelize');
const config = require('../config/config')
const user = require('./user')
const todo = require('./todo')

const env = process.env.NODE_ENV ?? 'development';
// 환경변수
const dbConfig = config[env]
// dbconfig에서 key 값에 따라 databse 설정을 바꾸기 위함

const db = {}
// 비어있는 객체

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
) // db 연결 객체화시키고 연결하기 위해 셋팅

db.User = user;
db.Todo = todo;
// 스키마 설정

Object.keys(db).forEach(model => {
  db[model].init(sequelize)
})
// db에 객체를 순회하면서 테이블 생성

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;