import {GetStormByName} from "../controllers/GetParticularStorm"
import { Express } from "express-serve-static-core"

export const FindStormByName = (app : Express) =>{
    app.get ('/:name', GetStormByName)
}
