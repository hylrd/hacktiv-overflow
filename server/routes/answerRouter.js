const router = require('express').Router()
const authenticated = require('../middlewares/authenticated')
const answerController = require('../controllers/answerController')

router.post('/:id', authenticated, answerController.add)
router.post('/votes/:id', authenticated, answerController.addVotes)
router.put('/:id', authenticated, answerController.update)
router.get('/:id', answerController.getAnswer)



module.exports = router