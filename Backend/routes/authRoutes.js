const express = require('express')
const router = require('express').Router()

router.route('/register')
    .get((req, res) => {
        res.send('Send HTML')
    })
    .post((req, res) => {
        res.send("AUTH")
    })

router.route('/login')
    .get((res, req) => {
        res.send('Send Login Form')
    })
    .post((res, req) => {
        res.send("Authorize")
    })

module.exports = router
