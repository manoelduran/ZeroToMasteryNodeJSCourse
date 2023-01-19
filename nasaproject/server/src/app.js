import path from 'path';
import express from 'express';
import cors from 'cors';
import { planetsRouter } from './routes/planets/planets.routes.js';
import morgan from 'morgan';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'))
const buildDirectory = path.join('public')
app.use(express.json());
app.use(express.static(buildDirectory))
app.use(planetsRouter);
app.get('/', (req, res) => {
    res.sendFile('public', 'index.html')
})

export { app };