import express from 'express'
import mongoose from "mongoose"
import { Todo } from './models/Todo.js';

let conn = await mongoose.connect('mongodb://localhost:27017/todo');

const app = express()
const port = 3000

app.get('/', (req, res) => {

    let todo = new Todo({name:"zee", desc:"this is the first person to enter", age:21})
    todo.save();

  res.send('Hello World!')
})

app.get('/a', async(req, res) => {

 let todo =await Todo.findOne({})
 res.json({description: todo.desc, name: todo.name})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
