import { Notification } from './modules/Notification/Notification.js';
import { Timer } from './modules/Timer/Timer.js';

const timer = new Timer(10)

const notification = new Notification([])

notification.subscribe("respawn", (timer) => {
    if (timer === 10) {
        return console.log(`In ${timer} minutes the Mvp will appear`)
    }
    return console.log('Oops')
})



notification.notify("respawn", timer.minutes)





