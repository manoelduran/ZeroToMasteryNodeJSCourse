import express from 'express';
import { friendsROuter } from './routes/friends.routes';
import { messageRouter } from './routes/messages.routes';

const app = express();

const PORT = 4000;

//middleware

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json());


app.use('/friends', friendsROuter);
app.use('/messages', messageRouter);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})