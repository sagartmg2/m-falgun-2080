/* 
use school
show collections

db.createCollection("students")


*/

db.students.insertOne({
  name: "ram",
  age: 20,
})

db.students.insertMany([
  {
    name: "abc",
    age: 20,
  },
  {
    name: "xyz",
    age: 20,
  },
])


db.todos.insertMany([
    {title:"css",status:false},
    {title:"js",status:false},
])

db.todos.find()

db.students.find()
// db.students.find(<filter options>)

db.students.find({name:"ram"})

db.students.updateOne({})

