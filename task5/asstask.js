
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve ('new task is done');
        }, 1500)
    });
    return promise;
};

// chain of call back for promisess or sync fun
// setTimeout (() => {
// console.log('timeout task is done');
// fetchData()
// .then((text) => {
//     console.log(text);
//     return fetchData();
// })
// .then((text2) => {
//     console.log(text2);
// });
// },  2000);

setTimeout(() => {
    console.log("Timer is done!");
  
    fetchData()
      .then((text) => {
        console.log(text);
        return fetchData();
      })
      .then((text2) => {
        console.log(text2);
      });
  }, 2000);
/*task1 is done
task2 is done
timeout task is done
new task is done */

console.log(' task1 is done')
console.log('task2 is done')

// task1 is done// sync function 
// task2 is done
// timeout task is done// Async function

// call back function