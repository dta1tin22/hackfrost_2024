import {Response} from "express"
import {Request} from "express"
import express from "express"

export const SendJSON = (req : Request, res : Response) => {
    const data  = req.body

    console.log('Received JSON:', data)
    res.status(200).send({message : "JSON sent successfully", receivedData: data })

}
