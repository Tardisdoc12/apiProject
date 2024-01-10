import * as fs from 'fs';

export function readJSON(fileName: string): any {
  try {
    const rawData: string = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
}
