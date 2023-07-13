import {Router} from 'express';

import {Todo} from '../models/todo';

type RequestBody = {text: string};
type RequestParams = {id: string};


let todo : Todo[] = [];

const router = Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({todo: todo});
});

router.post('/todo',(req,res,next)=>{
    const body = req.body as RequestBody; 
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todo.push(newTodo);

    res.send('success');
})


router.delete('/delete/:id',(req,res,next)=>{
    const params = req.params as RequestParams;
    todo = todo.filter(todoItem => todoItem.id !== params.id);
    res.status(200).send('deleted');
})


router.put('/edit/:id',(req,res,next)=>{
    const params = req.params as RequestParams;
    const tid = params.id;
    const body = req.body as RequestBody;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex >= 0){
        todo[todoIndex] = {id: todo[todoIndex].id, text: body.text};
        return res.status(201).send('todos updated');
    }

    res.status(404).send('page not found');
});


export default router