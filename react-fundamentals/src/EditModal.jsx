import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditModal(props) {
  console.log("render edit modal");
  let todo = props.todo; // { }

  const [titleField, settitleField] = useState(todo?.title || ""); // optional chaining

  console.log({ titleField });

  /* useEffect
      - componet did mount
      - component did update
  */
 
  useEffect(() => {
    console.log("use effect of children component");
    settitleField(todo?.title || "");
  }, [todo?._id]);

  console.log({ todo });

  if (!todo) {
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`https://todo-api-dom.vercel.app/api/todos/` + todo._id, {
        title: titleField,
        status: todo.status,
      })
      .then((res) => {
        props.fetchTodos();
        props.setTodoToBeUpdated(null);
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
  return (
    <div className="edit-modal">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <p>Edit Todos</p>
          <input
            value={titleField}
            onChange={(e) => {
              settitleField(e.target.value);
            }}
          />
          <button>edit</button>
          <button
            type="button"
            onClick={() => {
              props.setTodoToBeUpdated(null);
            }}
          >
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
