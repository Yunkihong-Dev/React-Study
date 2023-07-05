const GetCookie = require("../hooks/getCookie");
const { Todo } = require("../models");


/******************Load-Todo********************** */
const loadtodo = async( req, res) => {
    try {
        const getlists = await Todo.findAll({
            where: {
                userid : GetCookie('usrin')
            }
        });
        if(!getlists){
            return res.status(200).json({
                status: false,
                message:"할 일 목록이 없습니다."
            })
        }
    } catch (err) {
        console.log(err)
    }
}