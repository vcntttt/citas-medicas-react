import express from "express";
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import drsRoutes from "./routes/drs.routes.js";
import citasRoutes from './routes/citas.routes.js';
// import swaggerUI from "swagger-ui-express"
// import docs from "./docs.json" assert { type : "json" };
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(docs));

app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", drsRoutes);
app.use('/api', citasRoutes);

export default app; 