// const fetchData = callback => {
//     setTimeout(() => {
//         console.log('new task is done');
//     }, 1500)
// };

// setTimeout (() => {
// console.log('timeout task is done');
// fetchData(text => {
//     console.log(text);
// });
// },  2000);

// /*task1 is done
// task2 is done
// timeout task is done
// new task is done */

// console.log(' task1 is done')
// console.log('task2 is done')

// // task1 is done// sync function 
// // task2 is done
// // timeout task is done// Async function

// // call back function

const fetchData = () => {
    const prommise = new Promise((resolve, reject) =>{
        setTimeout(() => {
           resolve ('new task is done');
        }, 1500)
    });
   return Promise;
};

// chain of call back for promisess or sync fun
setTimeout (() => {
console.log('timeout task is done');
fetchData()
.then (text => {
    console.log('task is done...........first porm');
    return fetchData();
})
.then (text2 => {
    console.log('task is done...........second porm');
});
},  2000);

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