const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explore IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            success: true,
            upcoming: true,
            customers: ['Zero to Mastery', 'Nasa'],
        }))
}

function existsLounchWithFlightNumber(flightNumber) {
    return launches.has(flightNumber);
}
function deleteLauch(flightNumber) {
    const aborted = launches.get(flightNumber)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}


export { launches, addNewLaunch, getAllLaunches, deleteLauch, existsLounchWithFlightNumber };