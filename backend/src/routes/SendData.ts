<<<<<<< HEAD
import { Express } from 'express';
import { SendData } from '../controllers/SendDataToDB';

export const SendDataFromAPI = (app: Express) => {
	app.post('/', SendData);
};
=======
import {Express} from "express"
import express from "express"
import {SendJSON} from "../controllers/SendJSON"

export const SendDataFromAPI = (app : Express) => {
    app.use(express.json())
    app.post('/send', SendJSON)
}
>>>>>>> 75e4506 (Add new files)
