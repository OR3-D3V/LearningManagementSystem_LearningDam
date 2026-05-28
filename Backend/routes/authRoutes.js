const express = require('express')
const { checkIfUserExists } = require('../controllers/authController')
const router = require('express').Router()
const {generatePassword, comparePassword, checkIfexistingUser, createUser} = require(`${__dirname}/../controllers/authController`)


router.route('/register')
    .get((req, res) => {
        res.send('Send HTML')
    })
    .post(async (req, res) => {
        const name = req.body.name;
        const email = req.body.email.trim().toLowerCase();
        const role = req.body.role;
        const password = req.body.password.trim();
        const phone_number = req.body.phone_number

        // Check if user exists
        let existingUser = await checkIfUserExists(email);
        

        if (existingUser.hasAccount){
            res.statusCode = 409
            res.json({
                message : "User Already Exists"
            })
        }
        else{
            let hashedPassword = await generatePassword(password);
            const userObj = await createUser(name, email, role, hashedPassword)
            req.session.loggedIn
            req.session.userObj = {
                name : name, 
                email : email,
                role : role,
                phone_number : phone_number
            }
            req.session.loggedIn = true;

            res.statusCode = 200;
            res.json({
                message : "Account Created",
                acc : req.session.loggedIn
            })
        }
    })

    // Login Route
router.route('/login')
    .get((req, res) => {
        res.send('Send Login Form')
    })
    .post(async (req, res) => {
        let email = req.body.email;
        let plainPassword = req.body.password.trim();

        let response = await checkIfUserExists(email);
        
        // console.log(response)

        // User does not have an account
        if(response.hasAccount == false){
            res.status(401)
                .json({
                    accountStatus: 'Account Does Not Exist'
                })
        }
        else if(response.hasAccount == true){
            let hashedPassword = response.userObj.password;
            let passwordMatch = await comparePassword(plainPassword, hashedPassword);

            if(passwordMatch){
                req.session.userObj = {
                    name : response.userObj.first_name,
                    email : response.userObj.email,
                    role : response.userObj.role,
                    phone_number: response.userObj.phone_number
                }
                req.session.loggedIn = true;

                res.status(200).json({
                    userObj : req.session.userObj,
                    message : "Logged In"
                })
            }

            else{
                res.status(401)
                    .json({
                        message : "Wrong Password"
                    })
            }
        }
    })

    // Check session
router.route('/me')
    .get((req, res) => {
        
        if(req.session.loggedIn){
            res.json(
                {
                    loggedIn: true,
                    userObj: req.session.userObj
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
