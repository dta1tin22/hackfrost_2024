import mongoose, { Schema } from "mongoose";

const Storm = new mongoose.Schema ({
    name : String,
})

const storm = mongoose.model ('storm', Storm)