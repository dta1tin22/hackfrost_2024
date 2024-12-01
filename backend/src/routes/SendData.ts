import { Express } from 'express';
import { SendData } from '../controllers/SendDataToDB';

export const SendDataFromAPI = (app: Express) => {
	app.post('/', SendData);
};
