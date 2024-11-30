import GetParticularStorm from "../controllers/GetParticularStorm"

const DirToStorm = (app : any) =>{
    app.get ('/:name', GetParticularStorm)
}

export default DirToStorm