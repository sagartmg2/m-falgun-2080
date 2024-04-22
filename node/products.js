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
// module.exports = createProduct;
// module.exports = editProduct; 



/* named export */
module.exports = {
  "createProduct": createProduct,
  editProduct,
  deleteProduct,
  getProduct,
};
