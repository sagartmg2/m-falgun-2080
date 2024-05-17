const express = require("express")
const app = express()


const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodosSchema = new Schema({
  title: String,
  status: Boolean,
})

const Todo = mongoose.model("Todo", TodosSchema)

mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("DB Connected!"))

app.get("/api/todos", async (req, res) => {
  // db.todos.find()
  let todos = await Todo.find()
  console.log(todos)
  res.send(todos)
  // res.send(["html", "mongodb"])
})

app.post("/api/todos", async (req, res) => {
  // db.todos.insertOne({title:})
  let todo = await Todo.create({title:"html"})
  res.send(todo)
})

app.put("/api/todos/:id", async (req, res) => {
  let todo = await Todo.findByIdAndUpdate("66472d84d9509b539993a095",{title:"htasdfasdfml"})
  res.send(todo)
})

app.listen(8000, () => {
  console.log("server started.")
})
