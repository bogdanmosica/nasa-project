const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    customer: ['ZTM', 'NASA'],
    target: 'Kepler-442 b',
    flightNumber: 100,
    launchDate: new Date('December 27, 2030'),
    mission: 'Keplar Ex',
    rocket: 'Explorer IS1',
    succes: true,
    upcoming: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}
function addNewLaunch(launch) {
    latestFlightNumber += 1;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            customers: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlightNumber,
            succes: true,
            upcoming: true,
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch
}