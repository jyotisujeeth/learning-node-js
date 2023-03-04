
async function getData() {
  let handlepromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("c");
    }, 3000);
  });

  let handlepromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("d");
    }, 0);
  });

  let x = await handlepromise1;
  let x2 = await handlepromise2;
  console.log(x);
  console.log(x2);
  console.log("e");
}


console.log("a");
console.log("b");

getData();