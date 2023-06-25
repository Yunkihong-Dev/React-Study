const express = require('express')
const router = express.Router();

router.post('/sign-up', (req, res) => {
    console.log(req.body)
    `insert into tb_user (email) value (${req.body.email})`
    res.status(200).json({
        message:true,
        data : "넌 나의 노예, 링딩동 링디기디기딩딩딩, 암욜맨 따라다다 그대여"
    })
})
// 해당 라우트는 이미 app.js에서 관심사 분리한 로직이다.
// 그러나 user.js에 너무많은 라우트가 있다면 유지보수하기에 힘들다
// 그렇다면 이를 해소하기 위해서 어떤 방식을 도입하는게 좋을까?

module.exports = router;