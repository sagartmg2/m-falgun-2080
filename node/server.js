//core moduel
const fs = require("fs");

// third part module
const bcrypt = require("bcrypt"); // npm i bcrypt

/* local modules */
// default import :
// const createProduct = require("./products") // () =>{}
// const editProduct = require("./products") // () =>{}

const product = require("./products"); // {  }

/* named import */
const { getProduct, createProduct, editProduct, deleteProduct } = product;

const {signin,signup} = require("./authentications");
const { sign } = require("crypto");

/* 
product is like this  {
  getProduct: [Function: getProduct],      
  createProduct: [Function: createProduct],
  editProduct: [Function: editProduct],    
  deleteProduct: [Function: deleteProduct] 
} 
*/

// createProduct()
// product.createProduct();
// product.editProduct();
// product.deleteProduct();

createProduct();
editProduct();
deleteProduct();
getProduct();

signin()
signup()




