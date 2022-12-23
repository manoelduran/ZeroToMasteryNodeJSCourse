import { parse } from 'csv-parse';
import fs from 'fs';

const habitablePlanet = [];

const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
};

const reading = fs
    .createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
reading.on('data', (data) => {
    if (isHabitablePlanet(data)) {
        habitablePlanet.push(data);
    };
});

reading.on('error', (error) => {
    console.log('error', error);
});

reading.on('end', () => {
    console.log('habitablePlanet', habitablePlanet.map((planet) => {
        return planet['kepler_name']
    }));
    console.log('habitablePlanet', habitablePlanet.length);
    console.log('done!');
});