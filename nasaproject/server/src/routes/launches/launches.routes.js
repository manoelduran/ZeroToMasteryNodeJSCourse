import express from 'express';
import { getLaunches, createLaunche } from './launchesController.js';


const launchesRouter = express.Router();

launchesRouter.get('/launches', getLaunches);
launchesRouter.post('/launches', createLaunche);

export { launchesRouter };