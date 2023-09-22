import morgan from "morgan"
import connectDB from "./db.js"
import app from "./app.js"

const PORT = process.env.PORT || 3000


app.use(morgan("dev"))
connectDB()
app.listen(PORT)

console.log("Server running on port " + PORT)