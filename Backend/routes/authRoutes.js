const express = require('express')
const router = require('express').Router()
const {generatePassword, comparePassword, checkIfUserExists, createUser} = require(`${__dirname}/../controllers/authController`)
router.route('/register')
    .get((req, res) => {
        res.send('Send HTML')
    })
    .post(async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const role = req.body.role;
        const password = req.body.password;
        const phone_number = req.body.phone_number
        if (await checkIfUserExists(email)){
            res.json({
                message : "User Already Exists"
            })
        }
        else{
            let hashedPassword = await generatePassword(password);
            await createUser(name, email, role, hashedPassword)
        }

        

    })

router.route('/login')
    .get((res, req) => {
        res.send('Send Login Form')
    })
    .post((res, req) => {
        res.send("Authorize")
    })

module.exports = router
