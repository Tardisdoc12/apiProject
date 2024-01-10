import express, { Request, Response } from 'express';
import { readJSON } from '../data';

const router = express.Router();
const Water_astres = readJSON('astreswater.json');

router.get('/', (req: Request, res: Response) => {
  res.json(Water_astres);
});

export { router as WaterPresenceRoutes };
