/* module system
     common js module
          - module.exports
           - require
     es module
      - export default
      - import
*/

// const product  = require("./products")
import product from "./products.js"

/* named import */
// const { getProduct, createProduct, editProduct, deleteProduct } = product;
const { getProduct, createProduct, editProduct, deleteProduct } = product;

// const { signin, signup }` = require("./authentications");
import  { signin  as login, signup } from "./authentications.js"

createProduct();
editProduct();
deleteProduct();
getProduct();

// signin();
login();
signup();
