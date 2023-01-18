import http from 'http';
import {app} from './app';

const server = http.createServer(app);

const PORT =  process.env.port || 8000;


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});