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

        // Check if user exists
        let userExists = await checkIfUserExists(email);
        if (userExists){
            res.statusCode = 409
            res.json({
                message : "User Already Exists"
            })
        }
        else{
            let hashedPassword = await generatePassword(password);
            const userObj = await createUser(name, email, role, hashedPassword)
            req.session.user = {
                name : name, 
                email : email,
                role : role,
                phone_number : phone_number
            }
            req.session.loggedIn = true;

            res.statusCode = 200;
            res.json({
                message : "Account Created"
            })
        }
    })

router.route('/login')
    .get((req, res) => {
        res.send('Send Login Form')
    })
    .post((req, res) => {
        let email = req.body.email
    })

    // Check session
router.route('/me')
    .get((req, res) => {
        if(req.session.loggedIn){
            res.json(
                {
                    loggedIn: true,
                    userObj: req.session.user
                }
            )
        }

        else{
            res.json(
                {loggedIn : false}
            )
        }
    })

module.exports = router
