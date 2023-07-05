const express = require('express')
const TodoListSerivce = require("../service/todo.service")
const router = express.Router()

router.get('/todo-list', TodoListSerivce.loadtodo)

  // Todo model을 생성
  // Todo CRUD를 구현 find, craete, update, destroy
  // todo server
  


module.exports = router