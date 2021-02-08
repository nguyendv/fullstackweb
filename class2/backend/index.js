const { response } = require('express')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

// Create a server application
const app = express()
app.use(cors())
app.use(bodyParser.json())
// The network port for the server application
const port = 3001

// Handler for GET /hello request
// "/hello" is the path of the request
// GET is the type of the request
app.get("/hello", (request, response) => {
    response.send("Hello World from server")
})

// New handler for GET /items
// That returns a list of items
app.get("/items", (request, response) => {
    // Use JSON format for messages
    /*
    {
        "items": [
            "item1",
            "item2",
            "item3"
        ]
    }
    */
    // Read items form data.json file
    // If you use database, this is where you query the database
    fs.readFile("data.json", (error, content) => {
        const items = JSON.parse(content)
        response.json(items)
    })
})

app.post("/items", (request, response) => {
    console.log(request.body)
    response.send("Server got a new todo List")
})

app.listen(port, () => {
    console.log("Listening to 3000 port")
})