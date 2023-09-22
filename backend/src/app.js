import express from "express";
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import drsRoutes from "./routes/drs.routes.js";
import citasRoutes from './routes/citas.routes.js';

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'https://reservatumed.netlify.app/'
]
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", drsRoutes);
app.use('/api', citasRoutes);





export default app; 