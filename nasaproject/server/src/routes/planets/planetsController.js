import { habitablePlanets } from "../../models/planets.js";

function getAllPlanets(req, res) {
    return res.status(200).json(habitablePlanets)
};

export { getAllPlanets };