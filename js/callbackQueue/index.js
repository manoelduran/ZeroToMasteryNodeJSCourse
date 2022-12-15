
// Callback Queue - Task Queue
setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
setTimeout(() => { console.log('2', 'is the loneliest number') }, 10)


// Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data)) // priority into callback Queue

console.log('3', 'is a crowd')