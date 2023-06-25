const {Strategy, ExtractJwt} = require("passport-jwt");
const { User } = require("../models");
const JwtStrategy = Strategy;

const JwtConfig = {
    // 복호화
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),//대상
    secretOrKey:"1234"//키
}   

const jwtVerify = async (payload, done) => {
        try {
            const id = payload.id;
             //만료 기한 로직

            // jwt 토큰에 있는 만료기한과 현재 시간을 비교하는 로직
            // 차이를 분 단위로 계산

            const user = await User.findOne({where:id})
            if(user){
                //유저정보가 있고 5분 이하면 통과
                return done(null, user);
            }
            else{
                //그 외엔 전부 실패
                done(null,false,{
                    status: false,
                    message: "올바르지 않은 인증정보입니다."
                })
            }
        } catch (err) {
            console.log(err);
            done(err);
        }
}



module.exports = () =>{
    passport.use('jwt', new JwtStrategy(JwtConfig,jwtVerify))
}