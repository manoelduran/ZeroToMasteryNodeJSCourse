import express from 'express';
import {getMessages, createMessage} from '../controllers/MessagesController.js';

export const messageRouter = express.Router();

messageRouter.get('/', getMessages)

messageRouter.post('/', createMessage)