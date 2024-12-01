import Express from "express" 
import mongoose from "mongoose"
import {storm} from "./controllers/models/Storm.model"
import { Request } from "express"
import { Response } from "express"
import {FindStormByID} from "./routes/stormByID"
import { SendDataFromAPI } from "./routes/SendData"
import { SearchStorm } from "./routes/SearchStorms"
import cors, { CorsOptions } from "cors"

const app = Express()

const corsOptions : CorsOptions = {
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}

// middleware
app.use (Express.json())
app.use (Express.urlencoded ({extended: false}))

app.use(cors(corsOptions))

// connect to database
mongoose.connect (process.env.STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("Connection failed"))



SendDataFromAPI(app)
SearchStorm (app)
FindStormByID (app)



// get the entire Storms from DB
app.get ('/', async (req : Request, res : Response) => {
    try {
        const storms : Array <StormModel> = await storm.find ({})
        res.status (200).json ({
            stormsInformation: storms
        })
    }catch (error : any) {
        res.status (500).json ({message : error.message})
    }
})


app.listen (process.env.PORT)



