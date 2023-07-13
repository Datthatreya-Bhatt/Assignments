import {Router} from 'express';

import {Todo} from '../models/todo';

let todo : Todo[] = [];

const router = Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({todo: todo});
});

router.post('/todo',(req,res,next)=>{
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }

    todo.push(newTodo);

    res.send('success');
})


router.delete('/delete/:id',(req,res,next)=>{
    let id = req.params.id; 
    todo = todo.filter(todoItem => todoItem.id !== req.params.id);
    res.status(200).send('deleted');
})


router.put('/edit/:id',(req,res,next)=>{
    const tid = req.params.id;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex >= 0){
        todo[todoIndex] = {id: todo[todoIndex].id, text: req.body.text};
        return res.status(201).send('todos updated');
    }

    res.status(404).send('page not found');
});


export default router