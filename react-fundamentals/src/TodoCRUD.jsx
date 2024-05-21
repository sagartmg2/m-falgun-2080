import axios from "axios";
import React, { useEffect, useState } from "react";

/* 
  status codes
  
  2  succes
  3 redirect 
  4 clicent /react
  5 - server /express

*/

export default function TodoCRUD() {
  const [todos, setTodos] = useState([]);
  /* rendering */

  function fetchTodos() {
    axios.get("https://todo-api-dom.vercel.app/api/todos").then((res) => {
      console.log(res);
      console.log(res.data.data);
      setTodos(res.data.data);
    });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  function createNewTodo(e) {
    e.preventDefault();
    axios
      .post("https://todo-api-dom.vercel.app/api/todos", {
        title: "new data......",
      })
      .then((res) => {
        fetchTodos();
      });
  }

  return (
    <>
      <h1>TodosList</h1>
      <form onSubmit={createNewTodo}>
        <input type="text" />
        <button>create</button>
      </form>
      <ul>
        {todos.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </>
  );
}
