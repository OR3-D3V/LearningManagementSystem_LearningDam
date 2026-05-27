const {pool} = require(`${__dirname}/../db/db.js`)

const bcrypt = require('bcrypt');

async function generatePassword(plainPassword){
    let hashedPassword = await bcrypt.hash(plainPassword, 10)

    return hashedPassword;
}


async function comparePassword(plainPassword, hashPassword){
    let response = await bcrypt.compare(plainPassword, hashPassword)

    return response;
}


async function createUser(name, email, role, hashedPassword){
    const result  = await pool.query('INSERT INTO users (email, password, role, first_name, last_name) VALUES($1, $2, $3, $4, $5) RETURNING *', [email, hashedPassword, role, name, name]);

    return result.row;
}

async function checkIfUserExists(email){
    const userExists = await pool.query('SELECT * FROM users where email = $1', [email])
    
    // For Debugging
    // console.log(userExists)
    // console.log(userExists.rowCount)

    if(userExists.rowCount == 1){
        return true;
    }
}

module.exports = {generatePassword, comparePassword, checkIfUserExists, createUser}