import axios from "axios";
import React, { useEffect, useState } from "react";

/* 
  status codes
  
  2  succes
  3 redirect 
  4 clicent /react /user
  5 - server /express

*/

export default function TodoCRUD() {
  const [todos, setTodos] = useState([]);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [error, setError] = useState("");
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
    setError("");
    setisSubmitting(true);
    e.preventDefault();
    axios
      .post("https://todo-api-dom.vercel.app/api/todos", {
        title: e.target.title.value,
      })
      .then((res) => {
        fetchTodos();
        setisSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        /* 
        err.respnose.data.errors = [
              {
                  "param": "title",
                  "msg": "Path `title` is required."
              },
              {
                  "param": "status",
                  "msg": "Path `status` is required."
              }
          ]
    */
        let errMsg = "";

        if (err.response.status == 400) {
          err.response.data.errors.forEach((el) => {
            errMsg = errMsg + el.msg;
          });
        } else if (err.response.status == 500) {
          errMsg = "SErver error";
        } else {
          errMsg = "something went wrong please try again later.";
        }
        setError(errMsg);
        setisSubmitting(false);
      });
  }

  function deleteTodo(_id) {
    axios
      .delete(
        `https://todo-api-dom.vercel.app/api/todos/`+_id
      )
      .then((res) => {
        fetchTodos();
      });
  }

  return (
    <>
      <h1>TodosList</h1>
      <form onSubmit={createNewTodo}>
        <input name="title" />
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting...." : "create new"}
        </button>
      </form>
      {error && <p>&nbsp;{error}</p>}
      <ul>
        {todos.map((el) => {
          return (
            <li key={el._id}>
              {el.title}{" "}
              <button
                onClick={() => {
                  deleteTodo(el._id);
                }}
              >
                delete
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}


