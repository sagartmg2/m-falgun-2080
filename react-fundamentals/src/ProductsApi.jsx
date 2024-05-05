import React from "react";
import axios from "axios";

export default function ProductsApi() {
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

  function fetchApiData() {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) =>{
    //     console.log(data)
    //   });
    axios.get("https://dummyjson.com/products")
    .then((res) =>{
        console.log(res.data.products)
    })


  }

  return (
    <>
      <button onClick={fetchApiData}>fetch products</button>
      <ul>
      
      </ul>
    </>
  );
}
