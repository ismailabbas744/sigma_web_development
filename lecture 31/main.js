const express = require('express')
const app = express()
const port = 3000
const blog = require("./routes/blog.js")

app.use(express.static('public'))
app.use('/blog', blog)


app.get('/', (req, res) => {
//   res.send('Hello World1!')
  res.json({a:1, b:2, c:3, d:4})
})

app.get('/about', (req, res) => {
  res.send('Welcome to About us')
})

app.get('/index', (req, res) => {

    res.sendFile('templates/index.html', {root: __dirname})

})
app.get('/:slug', (req, res) => {
  res.send(`welcome to ${req.params.slug}`)
  console.log(req.params.slug);
  console.log(req.query);
})

// app.get('/my.txt', (req, res) => {
//   res.sendFile('my.txt', {root: __dirname})
// })

app.put('/', (req, res) => {
    console.log("This is the Put request")
  res.send('Welcome to put request')
})
app.post('/', (req, res) => {
    console.log("This is the post request")
  res.send('Welcome to Post request')
})
app.delete('/', (req, res) => {
    console.log("This is the Delete request")
  res.send('Welcome to Delete request')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})