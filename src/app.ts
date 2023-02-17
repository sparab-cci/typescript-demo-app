import { Server } from 'http';
import express, { Application, ErrorRequestHandler } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import taskRoutes from './routes/task.route';

config(); // runs all environment variables inside .env file
connectDB();
const app: Application = express();

app.use(bodyParser.json());

app.use('/api/task', taskRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500).send({
        status : err.status || 500,
        message: err.message
    })
}

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3000;

const server: Server = app.listen(port, () =>{ 
    console.log(`server is running on port ${port}`);
});