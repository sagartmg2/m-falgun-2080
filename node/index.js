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

/*  */
let DB = []; // mondob

async function signup(email, myPlaintextPassword) {
  let saltRounds = 10;

  /* asynchronous */
  /*  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    let user = {
      email,
      password: hash,
    };
    DB.push(user);
    console.log(user);
  }); */

  let hashedPw = await bcrypt.hash(myPlaintextPassword, saltRounds);
  let user = {
    email,
    password: hashedPw,
  };

  DB.push(user);
}

async function auth() {
  await signup("ram@gmail.com", "12345678");
  await signup("shyam@gmail.com", "password");
  console.log({ DB: DB });
}

auth()

/* async await  */
