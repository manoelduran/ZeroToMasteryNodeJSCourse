
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

// they resolve only if the two promises resolve
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('Ooops.. Something get wrong!')); 

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('Ooops.. Something get wrong!')); 