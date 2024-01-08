import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

// Exemple de données (vous pouvez utiliser une base de données ou une source de données appropriée)
const Water_astres = [
    {id: 1, name:"Earth", hasWater: true},
    {id: 2, name:"Mars", hasWater: true},
];

// Route GET pour récupérer tous les astres du système solaire
app.get('/api/water_presence', (req: Request, res: Response) => {
  res.json(Water_astres);
});

// Route GET pour récupérer les astres du système solaire par nom
app.get('/api/astres', async (req: Request, res: Response) => {
    try{
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios.get(apiUrl);
        res.json(response.data['bodies']);
    }
    catch(error : any){
        res.status(500).json({ error: error.message});
    }
});

// Route GET pour récupérer les astres du système solaire qui ont de l'eau avec leurs informations
app.get('/api/water_planet_infos', async (req: Request, res: Response) => {
    try{
        const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies';
        const response = await axios.get(apiUrl);
        const water_response = Water_astres
        res.json(response.data['bodies'].filter((planet : any) => water_response.some((water_planet : any) => water_planet.name === planet.englishName)));
    }
    catch(error : any){
        res.status(500).json({ error: error.message});
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
