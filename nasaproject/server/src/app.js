import express from 'express';
import { planetsRouter } from './routes/planets/planets.routes.js';

const app = express();

app.use(express.json());

app.use(planetsRouter);


export { app };