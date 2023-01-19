import { planets } from "../../models/planets";

function getAllPlanets(req, res) {
    return res.status(200).json(planets)
};

export { getAllPlanets };