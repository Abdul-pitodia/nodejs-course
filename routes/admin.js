const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('<p><h1>Product added to cart successfully</h1><h2><a href="/">Go to Home</a></h2></p>');
})

module.exports = router;