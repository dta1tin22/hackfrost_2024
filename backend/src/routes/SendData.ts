import {Express} from "express"
import express from "express"
import {SendJSON} from "../controllers/SendJSON"

export const SendDataFromAPI = (app : Express) => {
    app.use(express.json())
    app.post('/send', SendJSON)
}