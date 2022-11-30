import mongoose, {Schema} from "mongoose";
import mongodb from "mongodb";

interface todoInstance{
    _id: string;
    name:string;
    description: string;
    todoStatus: boolean;
}

const todoSchema = new Schema({
    name: {type:String, required:true},
    description: {type: String, required: true},
    todoStatus: {type: String, required: false},
    
},

{
    timestamps: true
})


const todoModel = mongoose.model<todoInstance>("Todo", todoSchema);

export default todoModel;
