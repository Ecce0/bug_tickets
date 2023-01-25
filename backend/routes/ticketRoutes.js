const express = require('express')
const router = express.Router()
const { getTix, createTix } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTix).post(protect, createTix)

module.exports = router
