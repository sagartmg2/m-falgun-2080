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

app.use(express.json())

app.get("/api/todos", async (req, res) => {
  // db.todos.find()
  // return res.send(["html", "mongodb"])

  let todos = await Todo.find()
  console.log(todos)
  res.send(todos)
})

app.post("/api/todos", async (req, res) => {
  // db.todos.insertOne({title:})
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      status: false,
    })
    res.send(newTodo)
  } catch (err) {
    console.log(err)
    res.status(500).send("server error")
  }
})

app.put("/api/todos/:id", async (req, res) => {
  /* 
    db.todos.updateOne( { _id:ObjectId("6649cc334872262b02acd014") },{ $set: { status:true } } )
  */
  try {
    let todo = await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      status: req.body.status,
    })

    res.send("data updated.")
  } catch (err) {
    console.log(err);
    res.status(500).send("server error")
  }
})

app.delete("/api/todos/:id", async (req, res) => {
  /* 
    db.todos.removeOne({_id:ObjectId("6649cc334872262b02acd014") })
  */

  let todo = await Todo.findByIdAndDelete(req.params.id)
  res.send("data deleted.")
})


app.listen(8000, () => {
  console.log("server started.")
})
