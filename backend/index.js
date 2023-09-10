import express from "express"
import morgan from "morgan"
import connectDB  from "./db.js"


const app = express();

app.use(morgan("dev"))
connectDB()
app.listen(3000)
    console.log("Server running on port 3000")