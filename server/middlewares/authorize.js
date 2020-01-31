// const { article } = require('../models')
const Question = require('../models/question')

module.exports = 
    function (req, res, next){
        let pk = req.params.id
        Question.findById(pk)
        .then(res =>{
            console.log(res)
            console.log(req.currentUserId);
            
            if (req.currentUserid._id == res.userId) {
                next()
            } else {
                res.status(400).json({
                    msg: `unauthorized`
                })
            }
        })
        .catch(err =>{
            res.status(400).json({
                msg: `data not found`
            })
        })
    }