const express = require('express')
const router = express.Router()
const controller = require ('../controllers/index.controller')

router.get('/',controller.indexGetAll)
router.get('/GetTestsList',controller.GetTestsList)
router.get('/SubmitAnswer',controller.SubmitAnswer)
router.get('/indexGetAllWithoutCorrectAnswer',controller.indexGetAllWithoutCorrectAnswer)

module.exports = router