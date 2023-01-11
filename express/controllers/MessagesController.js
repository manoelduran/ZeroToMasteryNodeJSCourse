import path, { dirname } from 'path';
import {friends} from '../models/friends.js';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
export function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends!',
        friend: `${friends[0].name}`,
    })
   // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
    //res.send('<ul><li>Hellow</li></ul>')
}

export function createMessage(req, res) {
    console.log('Updating messages...')
}