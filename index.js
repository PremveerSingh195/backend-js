const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => [
    res.send("hello world")
])

app.get('/twitter', (req, res) => {
    res.send("Premveerdotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>please login at coffe aur code </h1>")
})

app.listen(port, () => {
    console.log(`Example app listning on port ${port}`);
})