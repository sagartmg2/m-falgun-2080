const bcrypt = require("bcrypt")

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

  console.log(user);
  DB.push(user);
}

function login(email,password){
  // email password in form data, 

  // check email in dabase
    // if email, check password
        // send user data
  // send error
      // invalid credentails..
}


module.exports = signup