const fs = require("fs");
const path = require("path");
const http = require("http"); // used by express

/* third party */
// const bcrypt = require("bcrypt"); // npm install bcrypt






// let element = document.getElementById("node")
// console.log(element);

/*  global object 
     console
     setTimeout
     __filename
     require
*/

/* module
    - core module
        - fs
        - path
        - http (api) // used by express 

    - local module
    - thrid party module
      - bcyrpt // hasing module
      - axios
      

      
*/

console.log("js connected");
console.log(__filename);
console.log(__dirname); //
fs.writeFileSync("custom.txt", "hello world");
console.log(path.resolve());

/* local module */
const signup  = require("./auth")

async function auth() {
  await signup("ram@gmail.com", "12345678");
  await signup("shyam@gmail.com", "password");

  // console.log({ DB: DB });
  
  // await login("ram@gmail.com", "12345678");
  // await login("shyam@gmail.com", "password");
}

auth()

/* async await  */
