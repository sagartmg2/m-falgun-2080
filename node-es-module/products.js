function createProduct() {
  console.log("product created.");
}

function editProduct() {
  console.log("product edit.");
}

function deleteProduct() {
  console.log("product delete.");
}

function getProduct() {
  console.log("product get.");
}


/* default export  */
/* only one default export per page  */
// module.exports = createProduct;
// module.exports = editProduct;



/* named export */
// module.exports = {
//   "getProduct": getProduct,
//   createProduct,
//   editProduct,
//   deleteProduct,
// }

const productFunctions = {
  "getProduct": getProduct,
  createProduct,
  editProduct,
  deleteProduct,
}
/* default export */
export default productFunctions 
