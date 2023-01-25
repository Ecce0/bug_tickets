const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


require('colors')
require('dotenv').config()


//Connection to DB
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.status(200).send('Help Desk API')
})



//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))