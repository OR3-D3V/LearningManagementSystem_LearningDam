const {Pool} = require('pg')


const pool = new Pool({
    user: 'postgres',
    password : 'oreoluwa',
    host: 'localhost',
    port: 5432,
    database : 'LDMS'
})

module.exports = {pool}




