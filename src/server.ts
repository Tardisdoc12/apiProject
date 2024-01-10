import express from 'express';
import { WaterPresenceRoutes } from './routes/waterPresences.route';
import { AstresRoutes } from './routes/astres.route';
import { WaterPlanetInfosRoutes } from './routes/waterPlanetInfos.route';

const app = express();
const PORT = 3000;

app.use('/api/water_presence', WaterPresenceRoutes);
app.use('/api/astres', AstresRoutes);
app.use('/api/water_planet_infos', WaterPlanetInfosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});