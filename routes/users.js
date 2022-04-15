const express = require('express')
const router = express.Router();

//Login Page
router.get('/login', (req, res) => {
    res.render('login')
})
//Register Page
router.get('/register', (req, res) => {
    res.render('register')
})
//Logout page
router.get('/logout', (req, res) => {
    res.render('logout')
})

//*Module Export*

module.exports = router;