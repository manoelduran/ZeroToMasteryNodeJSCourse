import express from 'express';
import { getAllPlanets } from './planetsController';

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

export {planetsRouter};