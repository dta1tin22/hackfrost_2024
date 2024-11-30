import { triggerAsyncId } from "async_hooks"
import Express from "express" 
import mongoose from "mongoose"
import storm from "./controllers/models/Storm.model"
import DirToStorm from "./routes/storm"

const app = Express()
mongoose.connect (process.env.STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("Connection failed"))


app.get ('/', async (req : any, res : any) => {
    try {
        const storms = await storm.find ({})
        res.status (200).json (storms)
    }catch (error : any) {
        res.status (500).json ({message : error.message})
    }
})

DirToStorm (app)

app.listen (process.env.PORT)



