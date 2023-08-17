const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { connection } = require('./config/config')
const { Triprouter } = require('./routes/trip.route')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/trip', Triprouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Trip Planner App ☻')
})

app.listen(process.env.port, async(req, res) => {
    try {
        await connection
        console.log('connected')
    } catch (err) {
        console.log('not connected')
        console.log(err.message)
    }
    console.log(`server running on port ${process.env.port}`)
})