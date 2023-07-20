const GetCookie = require("../hooks/getCookie");
const { Todo } = require("../models");


/******************Load-Todo********************** */
const loadtodo = async( req, res ) => {
    console.log("leadtodo 들어옴");
    // try {
    //     const getlists = await Todo.findAll({
    //         where: {
    //             userid : GetCookie('usrin')
    //         }
    //     });
    //     console.log("내가만든 쿠키~ : "+GetCookie('usrin'))
    //    res.status(200).json({
    //         status:true,
    //         getlists
    //     })
        
    // } catch (err) {
    //     res.status(500).json({
    //         error:'Internal Server Error'
    //     })
    // }
}
module.export={ 
    loadtodo
};