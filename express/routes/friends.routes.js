import express from 'express';
import {createFriend, getFriends, getFriendById} from '../controllers/FriendsController';

export const friendsROuter = express.Router();

friendsROuter.use((req,res,next) => {
    console.log('ip address',req.ip);
    next()
})

friendsROuter.post('/', createFriend())

friendsROuter.get('/', getFriends())

friendsROuter.get('/:id', getFriendById())