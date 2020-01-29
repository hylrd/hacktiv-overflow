const router = require('express').Router()
const authenticated = require('../middlewares/authenticated')
const queController = require('../controllers/queController')

router.post('/', authenticated, queController.add)
router.post('/votes/:id', authenticated, queController.addVotes)
router.delete('/:id', authenticated, queController.remove)
router.put('/:id', authenticated, queController.update)


module.exports = router