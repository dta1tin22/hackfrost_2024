import {GetStormById} from "../controllers/GetParticularStorm"
import { Express } from "express"

export const FindStormByID = (app : Express) => {
    app.get ('/:_id', GetStormById)
}



