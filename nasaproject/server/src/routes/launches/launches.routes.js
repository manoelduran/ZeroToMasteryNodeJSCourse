import express from 'express';
import { getLaunches, createLaunch } from './launchesController.js';


const launchesRouter = express.Router();

launchesRouter.get('/', getLaunches);
launchesRouter.post('/', createLaunch);

export { launchesRouter };