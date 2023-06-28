const passport = require("passport")

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err ,user, info) => {
      if(err || !user) {
        res.status(401).json({
          message: "JWT Token Expired"
        })
      }
      req.user = user
      next()
  })(req, res, next)
}