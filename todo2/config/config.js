
 module.exports = {
  // 개발용, 로컬
  development: {
    username: "root",
    password: "1234",
    database: "todo",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  // 테스터서버 DB
  test: {
    username: "root",
    password: "1234",
    database: "todo",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  // 배포용 DB
  production: {
    username: "root",
    password: "1234",
    database: "todo",
    host: "127.0.0.1",
    dialect: "mysql"
  }
 }