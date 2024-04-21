const fs = require("fs");
const path = require("path");
const http = require("http"); // used by express 

/* third party */
const bcrypt = require("bcrypt"); // npm install bcrypt

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
        - http (api)

    - local module
    - thrid party module

      
*/

console.log("js connected");
console.log(__filename);
console.log(__dirname); //
fs.writeFileSync("custom.txt", "hello world");
console.log(path.resolve());

/*  */
let DB = []; // mondob

function signup(email, myPlaintextPassword) {
  let saltRounds = 10;
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    let user = {
      email,
      password: hash,
    };
    DB.push(user);
    console.log(user);
  });
}

signup("ram@gmail.com", "12345678");
signup("shyam@gmail.com", "password");



/* async await  */
