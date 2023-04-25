import express from 'express';
import Data from '../models/model.js';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('GET REQUEST');
});

router.get('/:id', (req, res) =>{
    res.send(req.params.id);
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
