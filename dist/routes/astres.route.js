"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstresRoutes = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
exports.AstresRoutes = router;
router.get('/', async (req, res) => {
    try {
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios_1.default.get(apiUrl);
        res.json(response.data['bodies']);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
