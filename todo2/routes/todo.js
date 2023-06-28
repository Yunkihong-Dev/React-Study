const express = require('express')
const jwtAuth = require('../middlewares/auth')

const router = express.Router()

router.get('/', jwtAuth, (req, res, next )=> {
  // try {
  //   await Todo.create({
  //     userId: user.id
  //   })
  // } catch (error) {
    
  // }
 

  // Todo model을 생성
  // Todo CRUD를 구현 find, craete, update, destroy
  // todo server
  

  res.status(200).json(req.user)
})

module.exports = router