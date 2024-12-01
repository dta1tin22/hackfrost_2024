import {storm} from "./models/Storm.model"
import { Request } from "express"
import { Response } from "express"

export const GetStormById = async (req : Request, res : Response) => {
    try {
        const Storm = await storm.findOne (req.params)
        res.status (200).json (Storm)
        // res.status (200).send (Storm)
    } catch (error : any) {
        res.status (400).json ({message : error.message})
    }       
}


