import morgan from "morgan"
import connectDB from "./db.js"
import app from "./app.js"


connectDB()
app.listen(3000)
console.log("Server running on port 3000")