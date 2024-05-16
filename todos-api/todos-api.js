const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/todos").then(() => console.log("DB Connected!"))

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const TodoSchema = new Schema({
  title: String,
  status: Boolean,
})

const Todo = mongoose.model("Todo", TodoSchema)

app.get("/api/todos", async (req, res) => {
  let todos = await Todo.find()
  res.send(todos)
  //   res.send(["html", "mongodb"])
})

app.listen(8000, () => {
  console.log("server started.")
})
