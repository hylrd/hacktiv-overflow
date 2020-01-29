const router = require('express').Router()
const userRouter = require('./userRouter')
const queRouter = require('./queRouter')


router.use('/user', userRouter)
router.use('/question', queRouter)

module.exports = router