const express = require("express")
const app = express()
var cors = require('cors')
app.use(cors())


const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodosSchema = new Schema({
  title: String,
  status: Boolean,
})

const Todo = mongoose.model("Todo", TodosSchema)
const DB_NAME = "todos"
mongoose
  .connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
  .then(() => console.log("DB Connected!"))

app.use(express.json())

app.get("/api/test", async (req, res) => {
  res.send("test")
  res.send("test")
})

app.get("/api/todos", async (req, res) => {
  // db.todos.find()
  try {
    let todos = await Todo.find()
    res.send(todos)
  } catch (err) {
    console.log(err)
    res.status(500).send("Server error")
  }
})

app.post("/api/todos", async (req, res) => {
  // db.todos.insertOne({title:})

  try {
    if (!req.body.title) {
      return res.status(400).send({
        msg: "Bad request",
        error: {
          title: "requried field",
        },
      })
    }

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

/* :id here is called slug. it may contain any values */
app.put("/api/todos/:id", async (req, res) => {
  /* 
    db.todos.updateOne( { _id:ObjectId("6649cc334872262b02acd014") },{ $set: { status:true } } )
  */

  let error = {}
  let hasError = false

  if (!req.body.title) {
    error.title = "required."
    hasError = true
  }
  if (!req.body.status) {
    error.status = "required."
    hasError = true
  } else {
    if (typeof req.body.status !== "boolean") {
      error.status = "boolean required"
      hasError = true
    }
  }

  if (hasError) {
    res.status(400).send({
      msg: "Badrequst",
      error,
    })
    return
  }

  try {
    let matchedTodo = await Todo.findById(req.params.id)
    if (!matchedTodo) {
      res.status(404).send("resource not found")
      return
    }

    await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      status: req.body.status,
    })

    res.send("data updated.")
  } catch (err) {
    console.log(err)
    res.status(500).send("server error")
  }
})

app.delete("/api/todos/:id", async (req, res) => {
  /* 
    db.todos.removeOne({_id:ObjectId("6649cc334872262b02acd014") })
  */

  try {
    let todo = await Todo.findById(req.params.id)
    if (!todo) {
      res.status(404).send("resource not found")
      return
    }

    await Todo.findByIdAndDelete(req.params.id)
    res.send("data deleted.")
  } catch (err) {
    res.status(500).send("server error")
  }
})

app.listen(8000, () => {
  console.log("server started.")
})
