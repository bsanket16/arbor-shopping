require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const { isSignedIn } = require("./controllers/auth");

app.use(cors())
app.use(bodyParser.json())

// routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', orderRoutes)

//db connection
mongoose.connect( process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Database connected')
})

const port = process.env.PORT || 8000

//server
app.listen(port, () => {
    console.log(`App running at ${port}`)
})