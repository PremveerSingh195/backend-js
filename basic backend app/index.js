require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT


const githubData = {
    "login": "PremveerSingh195",
    "id": 81909305,
    "node_id": "MDQ6VXNlcjgxOTA5MzA1",
    "avatar_url": "https://avatars.githubusercontent.com/u/81909305?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PremveerSingh195",
    "html_url": "https://github.com/PremveerSingh195",
    "followers_url": "https://api.github.com/users/PremveerSingh195/followers",
    "following_url": "https://api.github.com/users/PremveerSingh195/following{/other_user}",
    "gists_url": "https://api.github.com/users/PremveerSingh195/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PremveerSingh195/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PremveerSingh195/subscriptions",
    "organizations_url": "https://api.github.com/users/PremveerSingh195/orgs",
    "repos_url": "https://api.github.com/users/PremveerSingh195/repos",
    "events_url": "https://api.github.com/users/PremveerSingh195/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PremveerSingh195/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Premveer Singh",
    "company": "Callsmaster",
    "blog": "",
    "location": "delhi, india",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": "Premvee56413547",
    "public_repos": 13,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2021-04-04T11:50:03Z",
    "updated_at": "2024-06-08T05:38:22Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send('Twitter page')
})

app.get("/login", (req, res) => {
    res.send("<h1>This is login page</h1>")
})

app.get("/github", (req, res) => {
    res.send(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})