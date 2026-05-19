const express = require('express');
const {pool} = require('./db/db.js')
const authRoutes = require('./routes/authRoutes')
const app = express();
const PORT = 3000

app.use('/auth', authRoutes)


app.listen(PORT, () => {
    console.log("SERVER STARTED")
})
