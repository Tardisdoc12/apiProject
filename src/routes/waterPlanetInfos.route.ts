import express, { Request, Response } from 'express';
import axios from 'axios';
import { readJSON } from '../data';

const router = express.Router();
const Water_astres = readJSON('astreswater.json');

router.get('/', async (req: Request, res: Response) => {
    try {
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios.get(apiUrl);
        const water_response = Water_astres['bodies'];
        res.json(response.data['bodies'].filter((planet : any) => water_response.some((water_planet : any) => water_planet.name === planet.englishName)));
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { router as WaterPlanetInfosRoutes };
