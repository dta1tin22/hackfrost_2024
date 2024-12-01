<<<<<<< HEAD
import Express from 'express';
import mongoose from 'mongoose';
import { storm } from './controllers/models/Storm.model';
import { Request } from 'express';
import { Response } from 'express';
import { FindStormByID } from './routes/stormByID';
import { SendDataFromAPI } from './routes/SendData';
import { SearchStorm } from './routes/SearchStorms';
import cors, { CorsOptions } from 'cors';
=======
import Express from "express" 
import mongoose from "mongoose"
import {storm} from "./controllers/models/Storm.model"
import { Request } from "express"
import { Response } from "express"
import {FindStormByID} from "./routes/stormByID"
import { SendDataFromAPI } from "./routes/SendData"
>>>>>>> 75e4506 (Add new files)

const app = Express();

const corsOptions: CorsOptions = {
	origin: process.env.CLIENT_URL,
	optionsSuccessStatus: 200
};

// middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

<<<<<<< HEAD
// connect to database
mongoose
	.connect(process.env.STORMS_DB_URL as string)
	.then(() => console.log('Connect successfully !!!!'))
	.catch(() => console.log('Connection failed'));
=======
mongoose.connect (process.env.STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("Connection failed"))


// Get a particular Storm
FindStormByID (app)
// Send data to server
SendDataFromAPI (app)




// get the entire Storms in DB
app.get ('/', async (req : Request, res : Response) => {
    try {
        const storms = await storm.find ({})
        res.status (200).json (storms)
    }catch (error : any) {
        res.status (500).json ({message : error.message})
    }
})


// Just for Test
app.post ('/', async (req : Request, res : Response) => {
    try {
        const storms = await storm.create (req.body);
        res.status (200).json(storms)
    } catch (error : any){
        res.status (500).json ({message : error.message})
    }
})



app.listen (process.env.PORT)
>>>>>>> 75e4506 (Add new files)

SendDataFromAPI(app);
SearchStorm(app);
FindStormByID(app);

// get the entire Storms from DB
app.get('/', async (req: Request, res: Response) => {
	try {
		const storms: Array<StormModel> = await storm.find({});
		res.status(200).json({
			stormsInformation: storms
		});
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(process.env.PORT);
