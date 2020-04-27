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

router.delete('/remove/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        await List.remove({ _id });
        return res.send({ message: 'List remove success.' })
    } catch (err) {
        console.log('err:', err);
        res.status(400).send({ error: 'List remove failed' });
    }
});

module.exports = app => app.use('/list', router);