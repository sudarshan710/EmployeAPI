import express from 'express';
import Data from '../models/model.js';

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const data = await Data.find();
        res.json(data);
    } catch(error){
        res.status(500).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const dataID = await Data.findById(req.params.id);
        res.json(dataID);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.post('/', async (req, res) =>{

});

router.put('/:id', (req, res) =>{
    res.send('Hello!');
});

router.delete('/:id', (req, res) =>{
    res.send('Hello!');
});

export default router;
