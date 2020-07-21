const express = require('express')
const router = express.Router()

const { getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct, getAllProducts, getAllUniqueCategories } = require('../controllers/product')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')

//params
router.param('userId', getUserById)
router.param('productId', getProductById)

//routers

//create
router.post('/product/create/:userId', isSignedIn, isAuthenticated, isAdmin, createProduct)

//read
router.get('/product/:productId', getProduct)
router.get('/product/photo/:productId', photo)

//delete
router.delete('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteProduct)

//update
router.put('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, updateProduct)

//listings
router.get('/products', getAllProducts)

router.get('/product/categories', getAllUniqueCategories)

module.exports = router