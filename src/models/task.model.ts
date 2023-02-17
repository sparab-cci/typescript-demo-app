import {Document, Schema, model} from "mongoose";

export interface ITask extends Document{
    title: string,
    status : string
}

const taskSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        status:{
            type: String,
            required:true
        }
    },
    {
        versionKey:false
    }
);

 //export task model
export default model<ITask>('Task', taskSchema);
