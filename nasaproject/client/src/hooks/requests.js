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

  try{
    return await fetch(`${apiUrl}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
     } )
 
  } catch (error) {
    return {
      ok: false
    }
  }
 
}

async function httpAbortLaunch(flightNumber) {
  try {
    return await fetch(`${apiUrl}/launches/${flightNumber}`, {
      method: 'delete',
     } )
  } catch(error) {
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};