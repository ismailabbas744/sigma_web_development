const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//Middlewares run before the requests i.e get, put, post, delete it runs for every request, we can use it to change or modify the request or to check validations

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    req.my = "hello this is wow"
    next()
})

// app.get('/', (req, res) => {
//   res.send(`Hello World! ${req.my}`)
// })

// we are using ejs template engine to send file with specific variables i.e we want to change our file with these given variables values
app.get('/', (req, res) => {
    let siteName = "Mr. wow"
    let searchText = "Search Now"
      res.render('index',{siteName:siteName, searchText: searchText})
    // we can also write the above as
    //   res.render('index',{siteName, searchText})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
