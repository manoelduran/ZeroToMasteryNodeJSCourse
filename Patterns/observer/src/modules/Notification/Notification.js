
class Notification {
    subscribers = []
    constructor(subscribers) {
        this.subscribers = subscribers
    }

    subscribe(key, callback) {
        this.subscribers.push({
            key,
            callback
        })

    }
    notify(key, value) {
        this.subscribers.forEach(observer => {
            if (observer.key === key) {
                observer.callback(value)
            }
        })
    }
}

export { Notification };