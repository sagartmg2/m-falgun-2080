/* why should we use middlware */

const express = require("express") //  () =>{  return { get:() =>{}, post:() =>{]}  } }
const app = express()

/* middleware
    - function which can acess req and response. 
*/

let isLoggedIn = false

function checkAuthentication(req, res) {}

checkAuthentication()

let dbTodos = ["html", "js", "react", "express"]

app.get("/", function (req, res) {
  res.send("Hello World ")
})

/* CRUD CREATE READ UPDATE DELETE */
/* GET POST PUT DELETE */

app.get("/api/todos", function (req, res) {
  res.send(dbTodos)
})

app.post("/api/todos", function (req, res) {
  if (isLoggedIn) {
    console.log("req.body", req.body)
    dbTodos.push("mongodb")
    res.send("todos created.")
  } else {
    res.status(401).send("unauthenticated")
  }
})

app.get("/api/products", function (req, res) {
  res.send("list of products")
})

app.post("/api/products", function (req, res) {
  if (isLoggedIn) {
    res.send("products created.")
  } else {
    res.status(401).send("unauthenticated")
  }
})

app.post("/api/todos", function (req, res) {
  console.log("req.body", req.body)
  dbTodos.push("mongodb")
  res.send("data created.")
})

app.listen(8000, () => {
  console.log("server started")
})
