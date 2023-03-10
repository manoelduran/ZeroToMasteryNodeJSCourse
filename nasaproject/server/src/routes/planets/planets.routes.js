import express from 'express';
import { getAllPlanets } from './planetsController.js';

const planetsRouter = express.Router();

planetsRouter.get('/', getAllPlanets);

export {planetsRouter};