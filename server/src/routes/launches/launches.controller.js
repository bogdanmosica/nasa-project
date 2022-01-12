const {
    abortLaunchById,
    addNewLaunch,
    getAllLaunches,
    launchWithIdExists,
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
};

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    // Validation;
    const {
        launchDate,
        mission,
        rocket,
        target,
    } = launch;

    if (!launchDate ||
        !mission ||
        !rocket ||
        !target
    ) {
        return res.status(400).json({
            error: 'Missing required launch property!'
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    // Validation;
    if (Number.isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date!'
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
};

function httpAbortLaunch(req, res) {
    const id = Number(req.params.id);

    if (!launchWithIdExists(id)) {
        return res.status(404).json({
            error: 'Launch not found!'
        });
    }
    const abortedLaunch = abortLaunchById(id);
    return res.status(200).json(abortedLaunch);
}

module.exports = {
    httpAbortLaunch,
    httpAddNewLaunch,
    httpGetAllLaunches,
}