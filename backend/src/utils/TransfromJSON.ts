import express from "express"

export const Transform = async(Storms: Array<IncomingModel>) => {
    let Result = await Storms.map((OneStorm : IncomingModel) => ({
        ...OneStorm, exposed_countries : OneStorm.exposed_countries.split(", ")
    }))
    return Result as Array<StormModel>
}

