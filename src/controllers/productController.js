const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/list', async (req, res) => {
    const listId = req.query.id;
    try {
        const products = await Product.find({ listId });
        return res.send({ products });
    } catch(err) {
        console.log('err:', err);
        return res.status(400).send({ error: `Fail when try to get products of list ${ listId }` });
    }
})

router.post('/register', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.send({ product });

    } catch(err) {
        console.log('err:', err);
        return res.status(400).send({ error: 'Product registration failed' });
    }
});

module.exports = app => app.use('/product', router);