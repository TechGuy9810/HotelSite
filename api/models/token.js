import mongoose from "mongoose";
const {Schema} = mongoose;

const TokenSchema = new mongoose.Schema({
userId:{
    type:Schema.Types.ObjectId,
    require:true,
    ref:"user",
    unique:true,
},
token:{type:String,required:true},
createdAt:{type:Date,default:Date.now(),expires:3600}

},
{timestamps:true});
export default mongoose.model("Token",TokenSchema);