/* 
core module 
        http module

third party module
        express 

local module 
*/

const express = require("express") //  () =>{  return { get:() =>{}, post:() =>{]}  } }
const app = express()

/* middleware
    - function which can acess req and response. and also next upcomming valid middleware
*/

let isLoggedIn = true

function checkAuthentication(req, res, next) {
  if (isLoggedIn) {
    // req.body = {"title":"custom"}
    next()
  } else {
    console.log("checking authenticateion")
    res.status(401).send("unauthenticated")
  }
}

/* 
checkAuthentication() // x x we should not call it directly
 */

app.use(checkAuthentication) // global middleware // runs prior to every request
app.use(express.json()) // express.json = () =>{ return (req,res,next) =>{ req.body  - postman body }  }


let dbTodos = ["html", "js", "react", "express"]

/* CRUD CREATE READ UPDATE DELETE */
/* GET POST PUT DELETE */

app.get("/api/todos", function (req, res) {
  console.log("send todos.")
  res.send(dbTodos)
})

app.post("/api/todos", function (req, res) {
    console.log("req.body", req.body)
    dbTodos.push("mongodb")
    res.send("todos created.")
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
