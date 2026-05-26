const express = require('express');
const {pool} = require('./db/db.js')
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')
const session = require('express-session')
const app = express();
const PORT = 3000

app.use(cors(
    {origin: 'http://localhost:5173'}
))

app.use(session({
    secret: 'LEARNINGDAMMS',
    resave: false, 
    saveUninitialized: false,
    cookie: {
        secure : false,
        maxAge: 1000 * 60 * 60
    }
}))

app.use(express.json())

app.use('/auth', authRoutes)


app.get('/', async (req, res) => {
    

    res.json(result.rows)
})


app.listen(PORT, () => {
    console.log("SERVER STARTED")
    
})
