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

// Search query
app.get('/users', (req, res) => {
    // res.send(users)
    const search = req.query.search;
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
    console.log(req.query);
})

// Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    console.log(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})