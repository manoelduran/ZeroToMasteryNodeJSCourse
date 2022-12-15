import { EventEmitter } from 'events';

const celebrity = new EventEmitter();

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulationss! You are the best!')
    }
})
celebrity.on('race', (result) => {
    if (result === 'lost') {
        return console.log('Oh! I know that I can do better than this!')
    }
})
process.on('exit', (code) => {
    console.log('Process exit event with code:', code)
})
celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')
