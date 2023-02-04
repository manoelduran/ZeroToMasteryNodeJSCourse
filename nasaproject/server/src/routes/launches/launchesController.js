import { launches, getAllLaunches, addNewLaunch, deleteLauch, existsLounchWithFlightNumber } from "../../models/launches.js";

function getLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
};

function deleteLaunch(req, res) {
    const flightNumber = Number(req.params.flightNumber);
    console.log('params', flightNumber)
    if (!existsLounchWithFlightNumber(flightNumber)) {
        return res.status(404).json({ error: 'Launch does not exists' })
    }
    const aborted = deleteLauch(flightNumber)
    return res.status(200).json(aborted)
}

function createLaunch(req, res) {
    const launch = req.body;
    console.log('launch', launch)
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({ error: 'Missing required launch property' })
    }
    launch.launchDate = new Date(launch.launchDate)
    if (isNaN(launch.launchDate)) { // se a data for valida, ele retorna false e a data retorna em data.valueOf() um numero, se não for uma data valida, ele da true e retorna um NaN
        return res.status(400).json({
            error: 'Invalid launch date',
        })
    }

    addNewLaunch(launch)
    return res.status(201).json(launch);
}

export { getLaunches, createLaunch, deleteLaunch };