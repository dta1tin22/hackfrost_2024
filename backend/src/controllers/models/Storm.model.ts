import mongoose, { Schema } from "mongoose";

const StormSchema = new mongoose.Schema ({
    name : String,
    from_to : String,
    exposed_countries : Array,
    exposed_population : String,
    maximum_wind_speed : String,
    maximum_storm_surge : String,
    vunerability : String,
    gdacs_score : Number,
    ended : Boolean
})

export const storm = mongoose.model ('storm', StormSchema)
