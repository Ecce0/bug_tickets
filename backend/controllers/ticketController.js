const asyncHandler = require ('express-async-handler')

const Ticket = require('../models/ticketModel')
const User = require('../models/userModel')


//@desc Get user tix
//@route GET /api/tickets
//@access Private
const getTix  = asyncHandler( async (req, res) => {
  
  res.status(200).json({message: 'get tix'})
})

//@desc create new tix
//@route POST /api/tickets
//@access Private
const createTix  = asyncHandler( async (req, res) => {
  
  res.status(200).json({message: 'create tix'})
})


module.exports = {
  getTix,
  createTix
}