import Express from "express" 
import mongoose from "mongoose"

const app = Express()
mongoose.connect (process.env.CURRENT_STORMS_DB_URL as string)
    .then(() => console.log ("Connect successfully !!!!"))
    .catch (() => console.log ("you dumb ass"))


app.get ('/', (req, res) => {
    res.send ("HELLO WORLD")
})

app.listen (process.env.PORT)



