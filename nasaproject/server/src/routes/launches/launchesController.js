import { launches, getAllLaunches, addNewLaunch } from "../../models/launches.js";

function getLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
};

function createLaunch(req, res) {
    const data = req.body
    if(!data.mission || !data.rocket || !data.launchDate || !data.target) {
        return res.status(400).json({error: 'Missing required launch property'})
    }
    if(isNaN(data.launchDate)) { // se a data for valida, ele retorna false e a data retorna em data.valueOf() um numero, se não for uma data valida, ele da true e retorna um NaN
        return res.status(400).json({
            error: 'Invalid launch date',
        })
    }
    data.launchDate = new Date(data.launchDate)
    addNewLaunch(data)
    return res.status(201).json(data);
}

export { getLaunches, createLaunch };