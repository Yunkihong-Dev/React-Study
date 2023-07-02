  const passport = require("passport")
  const User = require("../models/user")
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  const SetCookie  = require("../hooks/setCookie")
  const GetCookie = require("../hooks/getCookie")

/************************Sign-Up************************** */
  const signUp = async(req, res) => {

    try{
      const existUser = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      if(existUser) {
      // 있는 유저인지
        return res.status(400).json({
          status: false,
          message: "이미 사용 중인 이메일입니다"
        })
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 12)
      // 암호화
      
      await User.create({
        email: req.body.email,
        password: hashedPassword
      })
      // insert into users (email, password) values (req.body.email, hashedPassword)
      // ORM -> 객체 형태로 쓴 sql문이 변환되어 실제 DB와 소통

    
    } catch(err){
      console.log(err)
    }
  }


/************************Sign-In************************** */
  const signIn = async (req, res, next) => {
    await passport.authenticate('local', async (err, user, info) => {
      console.log(err, user)  
      if(err){
        return next(err)
      } // 서버 에러

      if(info){
        return res.status(info.status).json({
          message: info.message
        })
      } // 사용자 에러
      
      return req.login(user, async(err) => {
        if(err){
          return next(err)
        }

        const token = jwt.sign({
          id: user.id,
        }, "1234")

        // SetCookie('usrin',JSON.stringify(user.id));
        console.log('usrin',JSON.stringify(user.id))
        
        console.log('UserId in Cookie : '+GetCookie('usrin'));
        console.log('UserId : ',JSON.stringify(user.id));
        
        res.status(200).json({
          status: true, 
          token,
        })
      })
    })(req, res, next)
  }

  module.exports= {
    signUp,
    signIn
  }

  /* 
  const userList = () => {
    const users = await UserService.serachUser() ---->
  }
  */