import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { friendsROuter } from '../express/routes/friends.routes.js'
import { messageRouter } from '../express/routes/messages.routes.js'
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
const PORT = 4000;

//middleware

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})
app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends Are Very Clever',
        caption: 'Lets go Skiing',
        image: 'site/images/skimountain.jpg'
    })
})
app.use('/friends', friendsROuter);
app.use('/messages', messageRouter);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})