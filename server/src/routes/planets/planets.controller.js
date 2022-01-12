const { getAllHabitablePlanets } = require('../../models/planets.model');

function httpGetAllHabitablePlanets(req, res) {
    return res.status(200).json(getAllHabitablePlanets());
};

module.exports = {
    httpGetAllHabitablePlanets
};