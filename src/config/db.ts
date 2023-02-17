import {config} from 'dotenv';
import mongoose from 'mongoose';

config();
const URI: string = process.env.MONGO_URI || '';
console.log("connection string ", URI);

const connectDB = ()=>{
    mongoose.connect(URI)
    .then(()=>{
        console.log("DB connected");
    }).catch((error)=>{
        console.error(`Error: ${error.message}`);
    });
}

export default connectDB;
