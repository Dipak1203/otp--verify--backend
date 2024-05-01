import express from 'express';
import bodyParser from "body-parser"
import router from '../routes';
import cors from 'cors';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin:"*"
}))

app.use("/api/",router)

export default app;