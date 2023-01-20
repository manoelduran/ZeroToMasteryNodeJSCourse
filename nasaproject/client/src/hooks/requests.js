const apiUrl = 'http://localhost:8000'

async function httpGetPlanets() {
  const response = await fetch(`${apiUrl}/planets`);
  const planets = await response.json();
  console.log('planets', planets)
  return planets;
}

async function httpGetLaunches() {
  const response = await fetch(`${apiUrl}/launches`);
  const launches = await response.json();
  console.log('launches', launches)
  return launches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};