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

router.post('/add/', async (req, res) =>{
    const dataRec = new Data({
        id: req.body.id,
        name: req.body.name,
        department: req.body.department,            
        age: req.body.age
    })

    try {
        console.log('Here');
        const dataSaved = await dataRec.save();
        res.status(200).json(dataSaved);
    } catch(error){
        res.status(400).json({message: error.message});
    }
});

router.put('/update/:id', async (req, res) =>{
    try {
        const dataID = req.params.id;
        const newData = req.body;
        const options =  { new: true };

        const result = await Data.findByIdAndUpdate(dataID, newData, options);
        
        res.send(result);

    } catch(error){
        res.status(400).json({ message: error.message});
    }
});

router.delete('/delete/:id', async (req, res) =>{
    try {
        const dataID = req.params.id;
        const result = await Data.findByIdAndDelete(dataID);
        res.send(`Document with ${result.name} has been deleted!`);

    } catch(error){
        res.status(400).json({ message: error.message});
    }
});

export default router;
