import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import router from "./src/routes/productRoutes.js";

const port = 3300
const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect('mongodb+srv://Test:test123@cluster0.ghwwmer.mongodb.net/').catch(error => console.log('db not Connected', error))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})