import express from 'express'

const app = express();

app.use(express.static('dist'));


// app.get("/", (req, res) => {
//     res.send('Server is ready')
// })

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            "id": "1",
            "title": "A joke",
            "content": "This is a joke"
        },
        {
            "id": "2",
            "title": "second joke",
            "content": "This is second joke"
        },
        {
            "id": "3",
            "title": "third joke",
            "content": "This is third joke"
        },
        {
            "id": "4",
            "title": "Fourth joke",
            "content": "This is fourth joke"
        },
        {
            "id": "5",
            "title": "fifth joke",
            "content": "This is fifth joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})

