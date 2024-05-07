import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductsApi() {
  console.log("re-render");
  const [isLoading, setisLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  /*
     CRUD operatons
        create
        read
        update
        delete
    */

  /* 
    HTTP request methods
        read - GET
        create - POST
        update - PUT / PATCH
        delte - DELETE
    */

  /* 
        HTTP status codes
            2  successull
                200,201,204
            3  redirect
                303, 304
            4   client side error / frontend
                400 401 403 404 405 422
            5   server side error / backend
                500 503
    */

  async function fetchApiData() {
    /* fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
      }); */

    setisLoading(true);
    setError("");

    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setisLoading(false);
      })
      .catch((err) => {
        setisLoading(false);
        setError("somethig went wrong. please try again later.");
        // alert("");
      });
  }

  // fetchApiData() // we cant call it directly else infinite rerender

  useEffect(() => {
    console.log("use effect");
    fetchApiData();
    // empty dependency: component mount
  }, []);

  console.log(products);

  if(error){
    return <div className="alert-box">{error}</div>
  }


  return (
    <>
      <ul>
        <li>Component did mount</li>
        <li>Component did update</li>
        <li>Component did unmount</li>
      </ul>
      <input type="text" />
      <button onClick={fetchApiData}>fetch products</button>
      {isLoading && <p>is Loading...</p>}
      {error && <div className="alert-box">{error}</div>}
      <ul>
        {products.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </>
  );
}
