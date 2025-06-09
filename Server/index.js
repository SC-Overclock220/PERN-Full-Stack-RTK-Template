import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRouter from './Routes/User.Route.js'
import connect from './Config/Connect2DB.js';

dotenv.config();


const PORT = process.env.PORT;
const app = express();

app.use(morgan('tiny'));
app.use(cookieParser());
app.use(cors({ origin: ["https://localhost:5173"] }));
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);

connect();


app.listen(PORT, () => {

    console.log(`Server Running On PORT ${PORT}`);
})