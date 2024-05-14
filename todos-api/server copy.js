/* simple todos data. */

const express = require("express") //  () =>{  return { get:() =>{}, post:() =>{]}  } }
const app = express()

/* middleware
    - inceptor of requests. 
    - function which can acess req and response. and also next upcomming valid middleware
*/

let isLoggedIn = true
let role = "buyer"
// let role = "seller"

function checkAuthentication(req, res, next) {
  if (isLoggedIn) {
    console.log("login passed.")
    next()
  } else {
    res.status(401).send("unauthenticated.")
  }
}

function checkSellerRole(req, res, next) {
  console.log("check role")
  if (role === "seller") {
    next()
  } else {
    res.status(403).send("access forbidden")
  }
}

/* 
checkAuthentication() // x x we should not call it directly
 */

/* expres.json as global middleware. cause we might need request data for every request */
app.use(express.json()) // express.json = () =>{ return (req,res,next) =>{ req.body  - postman body }  }

// app.use(checkAuthentication)
// app.use(checkSellerRole)

let dbTodos = ["html", "js", "react", "express"]

/* CRUD CREATE READ UPDATE DELETE */
/* GET POST PUT DELETE */

app.get("/api/todos", function (req, res) {
  console.log("send todos.")
  res.send(dbTodos)
})

app.post("/api/todos", checkAuthentication, function (req, res) {
  console.log("req.body", req.body)
  dbTodos.push(req.body.title)
  res.send("todos created.")
})

app.put("/api/todos",(req,res) =>{

  res.send("updated..")
})

app.delete("/api/todos",(req,res) =>{
  res.send("deleted...")
})

app.get("/api/products", function (req, res) {
  res.send("list of products")
})

/* route level middleware */
app.post("/api/products", checkAuthentication, checkSellerRole, function (req, res) {
  console.log("req.body", req.body)
  res.send("products created.")
})

app.listen(8000, () => {
  console.log("server started")
})
