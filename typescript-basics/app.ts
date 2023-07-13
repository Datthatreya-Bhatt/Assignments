import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import todoRoutes from './routes/todos';



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(todoRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).send('page not found');
})

app.listen(3000);