import http from 'http';
import { app } from './app.js';
import { loadPlanetsData } from './models/planets.js';

const server = http.createServer(app);

const PORT = process.env.port || 8000;

async function startServer() {
    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}
startServer()