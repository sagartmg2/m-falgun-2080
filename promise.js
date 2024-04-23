let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "ram" });
  }, 2000);
});

async function fetchUserData() {
  let data = null;

  console.log(promise1);
  /* api request: asynchronous */
  /* we can make asynchronous code synchronous as well.  */
  //   promise1
  //     .then((res) => {
  //       data = res;
  //     })
  //     .catch((err) => {});

  data = await promise1;

  console.log({data});
}

fetchUserData();
console.log("after fetching user.");
