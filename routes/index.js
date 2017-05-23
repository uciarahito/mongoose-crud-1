const express = require('express')
const router = express.Router()
let bookController = require('../controllers/bookController')

router.post('/api/books', bookController.insertOne)
router.get('/api/books', bookController.getAll)
router.get('/api/book/:id', bookController.getById)

module.exports = router