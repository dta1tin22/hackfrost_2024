import Express from "express" 
import mongoose from "mongoose"
import {storm} from "./controllers/models/Storm.model"
import { Request } from "express"
import { Response } from "express"
import {FindStormByID} from "./routes/stormByID"

const app = Express()

// middleware
app.use (Express.json())
app.use (Express.urlencoded ({extended: false}))


// connect to database
mongoose.connect (process.env.STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("Connection failed"))


// Get a particular Storm
FindStormByID (app)


// get the entire Storms from DB
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
        const newStorms = req.body.stormsInformation as Array <StormModel>
        console.log (newStorms[0])

        const bulk = await newStorms.map ((OneStorm : StormModel) => ({
            updateOne: {
                filter: {name : OneStorm.name},
                update: OneStorm,
                upsert: true
            },   
        }))

        const result = await storm.bulkWrite (bulk)
        
        console.log ("SUCCESS", result)
        res.status (200).send ("success")
    } catch (error : any){
        res.status (500).json ({message : error.message})
    }
})



app.listen (process.env.PORT)



