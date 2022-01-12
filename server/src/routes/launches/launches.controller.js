const {
    addNewLaunch,
    getAllLaunches,
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

module.exports = {
    httpAddNewLaunch,
    httpGetAllLaunches,
}