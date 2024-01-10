"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterPresenceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
exports.WaterPresenceRoutes = router;
const Water_astres = (0, data_1.readJSON)('astreswater.json');
router.get('/', (req, res) => {
    res.json(Water_astres);
});
