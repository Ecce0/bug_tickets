const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 7000
const errorHandler = require('./middleware/errorMiddleware')

app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))