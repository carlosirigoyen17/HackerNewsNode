const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/hits', async (req, res) => {
    try {
        const hits = await controller.getHits();
        console.log('Success get DB');
        res.send(hits);
    } catch (error) {
        res.status(404).send({error});
    } 
});
router.put('/hits', async (req, res) => {
    console.log(req.body);
    try {
        const updateHit = await controller.updateHit(req.body.objectID);
        console.log('success');
    } catch (error) {
        console.log('error');
    }
    res.send({message: 'Success UPDATE'+ req.body.objectID});
});

module.exports = router;