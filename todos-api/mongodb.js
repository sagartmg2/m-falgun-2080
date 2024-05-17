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
  { title: "css", status: false },
  { title: "js", status: false },
])

db.todos.find()

db.students.find()
// db.students.find(<filter options>)

db.students.find({ name: "ram" })

db.students.updateOne({})

// use store
db.sales.insertOne({
  buyer: "Ram",
  phone: 13123,
  products: ["watch", "projector"],
})

db.sales.insertOne({
  buyer: "Hari",
  phone: 13123,
  products: [
    {
      title: "Watch",
      price: 1000,
    },
    {
      title: "projector",
      price: 500000,
    },
  ],
})

let sales = [
  {
    _id: ObjectId("6647220a52155a656d04d170"),
    buyer: "Ram",
    phone: 13123,
    products: ["watch", "projector"],
  },
  {
    _id: ObjectId("6647225352155a656d04d171"),
    buyer: "Hari",
    phone: 13123,
    products: [
      {
        title: "Watch",
        price: 1000,
      },
      {
        title: "projector",
        price: 500000,
      },
    ],
  },
]

sales.map((sale) => {
  return <li> {sale.buyer} </li>
})

let todos = [
  { _id: ObjectId("6645d6872e77b9df371d46bc"), title: "html" },
  {
    _id: ObjectId("6645d6c82e77b9df371d46bd"),
    title: "css",
    status: false,
  },
  {
    _id: ObjectId("6645d6c82e77b9df371d46be"),
    title: "js",
    status: false,
  },
  {
    _id: ObjectId("6647234852155a656d04d172"),
    name: "express",
    status: "false",
  },
]
