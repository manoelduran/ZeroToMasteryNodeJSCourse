import { launches, getAllLaunches, addNewLaunch } from "../../models/launches.js";

function getLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
};

function createLaunch(req, res) {
    const data = req.body
    data.launchDate = new Date(data.launchDate)
    addNewLaunch(data)
    return res.status(201).json(data);
}

export { getLaunches, createLaunch };