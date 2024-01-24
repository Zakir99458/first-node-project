const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! 4000')
})

const users = [
    {id:0, name:"Zakir", email:"z@yahoo.com"},
    {id:1, name:"Sahil", email:"z@yahoo.com"},
    {id:2, name:"Zarah", email:"z@yahoo.com"},
    {id:3, name:"Mitu", email:"z@yahoo.com"},
    {id:4, name:"Zyva", email:"z@yahoo.com"},

]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    console.log(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})