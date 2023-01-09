import express from 'express';
import {getMessages, createMessage} from '../controllers/MessagesController';

export const messageRouter = express.Router();

messageRouter.get('/', getMessages())

messageRouter.post('/', createMessage())