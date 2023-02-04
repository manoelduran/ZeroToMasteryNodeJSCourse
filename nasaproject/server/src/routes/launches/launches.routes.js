import express from 'express';
import { getLaunches, createLaunch, deleteLaunch } from './launchesController.js';


const launchesRouter = express.Router();

launchesRouter.get('/', getLaunches);
launchesRouter.delete(`/:flightNumber`, deleteLaunch)
launchesRouter.post('/', createLaunch);

export { launchesRouter };