import express from "express"
import mongoose from "mongoose"
import { Employee } from "./models/Employee.js"


let conn = await mongoose.connect('mongodb://localhost:27017/company');

const app = express()
const port = 3000

app.set('view engine', 'ejs');
// app.use(express.static('public'))

app.get('/', async(req, res) => {
    res.render('index');
    
  })
  
  app.get('/generate', async(req, res) => {
    // delete the previous data
    await Employee.deleteMany({})
    
    let names = ["zee", "einstin", "rayn dall", "bill gate", "jeff", "helman", "musk", "mark", "john", "nan"]
    
    for (let i = 0; i < 10; i++) {
      let name = names[Math.floor(Math.random()*10)];
      let age = Math.floor(Math.random()*20+20);
      let employee = new Employee({name:name, age: age})
      employee.save();
      
    }
    res.send("generated")
    console.log("done")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})