const express = require('express');
const List = require('../models/list');

const router = express.Router();

router.get('/', async (req, res) => { 
    try {
        const marketLists = await List.find();
        return res.send({ marketLists });
    } catch(err) {
        console.log('err:', err);
        res.status(400).send({ error: 'List failed' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const list = await List.create(req.body);
        return res.send({ list });

    } catch (err) {
        console.log('err:', err);
        res.status(400).send({ error: 'List registration failed' });
    }
});

module.exports = app => app.use('/list', router);