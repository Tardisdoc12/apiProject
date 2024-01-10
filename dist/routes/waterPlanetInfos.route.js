"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterPlanetInfosRoutes = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const data_1 = require("../data");
const router = express_1.default.Router();
exports.WaterPlanetInfosRoutes = router;
const Water_astres = (0, data_1.readJSON)('astreswater.json');
router.get('/', async (req, res) => {
    try {
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios_1.default.get(apiUrl);
        const water_response = Water_astres;
        res.json(response.data['bodies'].filter((planet) => water_response.some((water_planet) => water_planet.name === planet.englishName)));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
