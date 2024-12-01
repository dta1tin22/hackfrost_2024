import Express from "express" 
import mongoose from "mongoose"
import {storm} from "./controllers/models/Storm.model"
import { Request } from "express"
import { Response } from "express"
import {FindStormByID} from "./routes/stormByID"
import { SendData } from "./controllers/SendDataToDB"
import { SearchStorm } from "./routes/SearchStorms"

const app = Express()

// middleware
app.use (Express.json())
app.use (Express.urlencoded ({extended: false}))


// connect to database
mongoose.connect (process.env.STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("Connection failed"))


// Get a particular Storm
SearchStorm (app)
FindStormByID (app)


// get the entire Storms from DB
app.get ('/', async (req : Request, res : Response) => {
    try {
        const storms : Array <StormModel> = await storm.find ({})
        res.status (200).json (storms)
    }catch (error : any) {
        res.status (500).json ({message : error.message})
    }
})


// Just for Test
app.post ('/', SendData)




app.listen (process.env.PORT)



