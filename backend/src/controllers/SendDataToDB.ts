import { Request, Response } from "express"
import { storm } from "./models/Storm.model"
import { Transform } from "../utils/TransfromJSON"

export const SendData = async (req : Request, res : Response) => {
    try {
        const New = req.body.stormsInformation as Array <IncomingModel>
        // console.log (newStorms[0])
       const newStorms : Array<StormModel> = Transform(New : Array <IncomingModel>) 
       
        // Update storms, add if they haven't existed
        const bulk = await newStorms.map ((OneStorm : StormModel) => ({
            updateOne: {
                filter: {name : OneStorm.name},
                update: OneStorm,
                upsert: true
            },   
        }))

        const Upload = await storm.bulkWrite (bulk)


        // change state of storms that aren't on the updated list from ongoing to history
        const NameOfStorms = await newStorms.map ((OneStorm : StormModel) => OneStorm.name)

        const ExpiredStorms = await storm.updateMany ({
            name : {$nin : NameOfStorms}
        },{
            ended : true
        })

        console.log ("SUCCESS", Upload, ExpiredStorms)
        res.status (200).send ("success")
    } catch (error : any){
        res.status (500).json ({message : error.message})
    }
}