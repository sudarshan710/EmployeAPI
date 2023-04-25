import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, { UseNewUrlParser:true});
const db = mongoose.connection;

db.on('error', (error) => console.log(`Error : ${error}`));
db.once('connected', () => console.log('Database connected!'));

import userRoutes from './routes/employees.js'

app.get('/', (req ,res) => { res.send('This is Homepage!')});

app.use('/employees', userRoutes);

app.listen(PORT, console.log('Server started!'));