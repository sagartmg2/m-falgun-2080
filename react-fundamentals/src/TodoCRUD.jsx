import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditModal from "./EditModal";

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
  const [todoToBeUpdated, setTodoToBeUpdated] = useState(null);
  /* rendering */

  function fetchTodos() {
    axios.get("http://localhost:8000/api/todos").then((res) => {
      console.log(res);
      console.log(res.data.data);
      setTodos(res.data.data);
    });
  }

  useEffect(() => {
    fetchTodos();
  },[]);

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
      .delete(`https://todo-api-dom.vercel.app/api/todos/` + _id)
      .then((res) => {
        fetchTodos();
      });
  }

  function toggleStatus(todo) {
    axios
      .put(`https://todo-api-dom.vercel.app/api/todos/` + todo._id, {
        title: todo.title,
        status: !todo.status,
      })
      .then((res) => {
        fetchTodos();
      })
      .catch((err) => {
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
      });
  }

  function editTodo(todo) {
    // alert("")
    setTodoToBeUpdated(todo);
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
              <input
                onChange={() => {
                  toggleStatus(el);
                }}
                type="checkbox"
                checked={el.status ? true : false}
              />
              <span className={el.status ? "line-through" : ""}>
                {el.title}
              </span>
              <button
                onClick={() => {
                  deleteTodo(el._id);
                }}
              >
                delete
              </button>{" "}
              <CiEdit
                onClick={() => {
                  editTodo(el);
                }}
              />
            </li>
          );
        })}
      </ul>
      <EditModal
        fetchTodos={fetchTodos}
        setTodoToBeUpdated={setTodoToBeUpdated}
        todo={todoToBeUpdated}
      />
    </>
  );
}
