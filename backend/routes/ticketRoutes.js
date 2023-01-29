const express = require('express')
const router = express.Router()
const { getTix, createTix, getUserTicket, deleteUserTicket, updateUserTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTix).post(protect, createTix)

router.route('/:id').get(protect, getUserTicket).delete(protect, deleteUserTicket).put(protect, updateUserTicket)



module.exports = router
