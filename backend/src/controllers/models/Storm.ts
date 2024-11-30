import mongoose, { Schema } from "mongoose";

const Storm = new mongoose.Schema ({
    gdacs_id : String,
    name : String,
    from_to : String,
    exposed_countries : String,
    exposed_population : String,
    maximum_wind_speed : String,
    maximum_storm_surge : String,
    vunerability : String,
    gdacs_score : Number
})

const storm = mongoose.model ('storm', Storm)