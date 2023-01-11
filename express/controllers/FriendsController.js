import {friends} from '../models/friends.js';

export function createFriend(req, res) {
    const {name} = req.body
    
    if (!name) {
        return res.status(400).json({ error: 'You need to write a name from your new friend!' });
    }
    const newFriend = {
        name,
        id: friends.length
    }
    friends.push(newFriend);
    res.status(201).json(newFriend);
}

export function getFriends(req, res) {
    res.json(friends)
}

export function getFriendById(req, res) {
    const { id } = req.params;
    const friend = friends.find((friend) => friend.id === Number(id));
    if (!friend) {
        res.status(404).json({
            error: 'Friend Not Found!'
        });
    }
    res.status(200).json(friend);
}