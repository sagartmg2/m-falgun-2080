import { useState } from "react";

// let todosData = ["html", "css", "js", "react", "express"]; // api data

// let mappedTodos = [ <li>html</li>,  <li>css</li> ,<li>js</li>]
// let mappedTodos = todosData.map((element, index) => {
//   return <li key={index}>{element}</li>;
// });

export default function Todos() {
  console.log("render-todos");
  // let todosData = ["html", "css", "js", "react", "express"]; // api data
  const [todosData, setTodosData] = useState([
    "html",
    "css",
    "js",
    "react",
    "express",
  ]);

  console.log("render todos");
  function addNewTodo() {
    console.log("Add");
    // todosData.push("new-element");
    setTodosData(["react","express"])
    console.log(todosData);
  }
  return (
    <div>
      <h2>Todos List</h2>
      <input type="text" />
      <button onClick={addNewTodo}>add</button>
      {JSON.stringify(todosData)}
      <ul>
        {todosData.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>

      {/* <ul>{mappedTodos}</ul> */}
    </div>
  );
}
