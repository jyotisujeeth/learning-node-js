async function myAbc() {
    const Promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('c');
        }, 000);
});

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('D');
    }, 000);
});

let x= await Promise1;
let y= await Promise2;


console.log(x);// function are executed based on how they call
  console.log(y);
 
  console.log("e");
}
myAbc();



console.log('A');
console.log('B');
