import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}
const directory = path.join('data', 'kepler_data.csv')
function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(directory)
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.log('error', err);
                reject(err)
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve()
            });
    })
}

export { habitablePlanets, loadPlanetsData };