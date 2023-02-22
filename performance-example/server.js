import express from 'express';

const app = express()

function delay(duration) {
    const startTime = Date.now()
    while (Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
    delay(4000)
    res.send(`Beep beep beep! ${process.pid}`)
})

console.log('Running server.js...')
console.log('Worker process started.')
app.listen(3000)
