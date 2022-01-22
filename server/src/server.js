const http = require("http");

require('dotenv').config();

const app = require("./app");

const { loadMongoose } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets/planets.model");
const { loadLaunchesData } = require("./models/launches/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadMongoose();
    await loadPlanetsData();
    await loadLaunchesData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};
startServer();


