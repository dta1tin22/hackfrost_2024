import {storm} from "./models/Storm.model"
import { Request } from "express"
import { Response } from "express"

export const GetStormByName = async (req : Request, res : Response) => {
    try {
        const name = req.params
        const Storm = await storm.findOne (name)
        res.status (200).json (Storm)
        // res.status (200).send (Storm)
    } catch (error : any) {
        res.status (400).json ({message : error.message})
    }
} 

export const GetStormById = async (req : any, res : any) => {
    try {
        const id = req.params
        const Storm = await storm.findById (id)
        res.status (200).json (Storm)
        // res.status (200).send (Storm)
    } catch (error : any) {
        res.status (400).json ({message : error.message})
    }       
}


