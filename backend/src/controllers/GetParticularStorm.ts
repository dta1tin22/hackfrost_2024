import storm from "./models/Storm.model"

const getStorm = async (req : any, res : any) => {
    try {
        const name = req.params
        const Storm = await storm.findOne ({'name' : `${name}`})
        res.status (200).json (Storm)
        // res.status (200).send (Storm)
    } catch (error : any) {
        res.status (400).json ({message : error.message})
    }
} 

export default getStorm