import { useState } from "react";

export default function Todos() {
  console.log("render-todos");

  // let todosData = ["html", "css", "js", "react", "express"];
  const [todosData, setTodosData] = useState([
    "html",
    "css",
  ]);

  function addNewTodo() {
    console.log("Add");
    // todosData.push("new-element"); // cant change react state variable directly

   /* 
      let temp = todosData // refernce variable
      temp.push("js")
    */

    let temp = [...todosData]  // spread opertor
    temp.push("js")
    
    
    console.log(temp);
    // setTodosData( ["html","css","js"])
    setTodosData( temp)

  }
  return (
    <div>
      <h2>Todos List</h2>
      <input type="text" />
      <button onClick={addNewTodo}>add</button>
      <br />
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
