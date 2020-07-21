const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const { logout, signup, login, isSignedIn } = require('../controllers/auth')

router.post('/signup', [
    //validation
    check('username').isLength({ min : 3}).withMessage('Username must be at least 3 characters'),
    check('email').normalizeEmail().isEmail().withMessage('Email address required'),
    check('password').isLength({ min : 5}, { max : 15}).withMessage('Password length invalid')

], signup)

router.post('/login', [
     //validation
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min : 5}, { max : 15})
], login)

router.get('/logout', logout)

module.exports = router