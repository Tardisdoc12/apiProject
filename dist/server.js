"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const waterPresences_route_1 = require("./routes/waterPresences.route");
const astres_route_1 = require("./routes/astres.route");
const waterPlanetInfos_route_1 = require("./routes/waterPlanetInfos.route");
const app = (0, express_1.default)();
const PORT = 3000;
app.use('/api/water_presence', waterPresences_route_1.WaterPresenceRoutes);
app.use('/api/astres', astres_route_1.AstresRoutes);
app.use('/api/water_planet_infos', waterPlanetInfos_route_1.WaterPlanetInfosRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
