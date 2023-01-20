import { launches } from "../../models/launches.js";

function getLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()))
};

function createLaunche(req, res) {
    const data = req.body
    launches.set(data.flightNumber, data)
    return res.status(201).json(data);
}

export { getLaunches, createLaunche };