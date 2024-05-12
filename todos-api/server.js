/* 
core module 
        http module

third party module
        express 

local module 
*/

const express = require("express") //  () =>{  return { get:() =>{}, post:() =>{]}  } }
const app = express()

/* localhost:8000/ */
/* localhost:8000/api/todos */

app.get("/", function (req, res) {
  res.send("Hello World ")
})

app.get("/api/todos", function (req, res) {
  res.send([{ title: "html", status: true }, "js", "react", "express"])
})

app.listen(8000, () => {
  console.log("server started")
})
