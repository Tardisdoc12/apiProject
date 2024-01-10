import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios.get(apiUrl);
        res.json(response.data['bodies']);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export { router as AstresRoutes };
